from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="CoinCarrière API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ----- Models -----
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class RecruiterLeadCreate(BaseModel):
    """Lead capture for Riad / hospitality recruiters."""
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    riad_name: Optional[str] = Field(default=None, max_length=160)
    city: Optional[str] = Field(default=None, max_length=80)
    need: Optional[str] = Field(default=None, max_length=600)
    source: Optional[str] = Field(default="landing")


class RecruiterLead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    phone: Optional[str] = None
    riad_name: Optional[str] = None
    city: Optional[str] = None
    need: Optional[str] = None
    source: str = "landing"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "CoinCarrière API en ligne"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/leads", response_model=RecruiterLead, status_code=201)
async def create_recruiter_lead(payload: RecruiterLeadCreate):
    """Capture a Riad recruiter lead. Stored in MongoDB."""
    lead = RecruiterLead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.recruiter_leads.insert_one(doc)
    except Exception as e:
        logging.exception("Failed to insert lead")
        raise HTTPException(status_code=500, detail="Impossible d'enregistrer la demande pour le moment.") from e
    return lead


@api_router.get("/leads", response_model=List[RecruiterLead])
async def list_recruiter_leads():
    leads = await db.recruiter_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for lead in leads:
        if isinstance(lead.get('created_at'), str):
            lead['created_at'] = datetime.fromisoformat(lead['created_at'])
    return leads


@api_router.get("/stats/sectors")
async def get_sectors():
    """Static, official-facing market data for the landing chart."""
    return {
        "label_note": "Données affichées à titre d'aperçu plateforme. Ne pas présenter comme statistiques spécifiques aux Riads.",
        "sectors": [
            {"name": "Ingénierie & Bureau d'études", "offers": 2530},
            {"name": "Banque, Assurance & Finance", "offers": 1314},
            {"name": "Conseil & Services aux entreprises", "offers": 441},
            {"name": "Marketing, Communication & Médias", "offers": 263},
            {"name": "Commerce & Distribution", "offers": 186},
            {"name": "Industrie & Production", "offers": 75},
            {"name": "Informatique & Technologie", "offers": 45},
            {"name": "BTP, Construction & Immobilier", "offers": 23},
        ],
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
