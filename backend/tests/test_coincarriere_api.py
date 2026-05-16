"""Backend tests for CoinCarrière API"""
import os
import uuid
import pytest
import requests
from datetime import datetime

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://embauche-simple.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Root -----
class TestRoot:
    def test_root_welcome(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "CoinCarrière" in data["message"]


# ----- Status (existing) -----
class TestStatus:
    def test_create_and_list_status(self, client):
        name = f"TEST_{uuid.uuid4().hex[:8]}"
        r = client.post(f"{API}/status", json={"client_name": name})
        assert r.status_code == 200
        body = r.json()
        assert body["client_name"] == name
        assert "id" in body and "timestamp" in body

        r2 = client.get(f"{API}/status")
        assert r2.status_code == 200
        names = [x["client_name"] for x in r2.json()]
        assert name in names


# ----- Leads -----
class TestLeads:
    def test_create_lead_full(self, client):
        payload = {
            "full_name": "TEST Houda Bennani",
            "email": f"test_{uuid.uuid4().hex[:6]}@riad.ma",
            "phone": "+212600000000",
            "riad_name": "Riad TEST",
            "city": "Marrakech",
            "need": "1 réceptionniste",
            "source": "landing-test",
        }
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["full_name"] == payload["full_name"]
        assert data["email"] == payload["email"]
        assert data["riad_name"] == payload["riad_name"]
        assert "id" in data
        # ISO datetime parseable
        assert datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))

    def test_create_lead_minimal(self, client):
        payload = {
            "full_name": "TEST Min User",
            "email": f"min_{uuid.uuid4().hex[:6]}@riad.ma",
        }
        r = client.post(f"{API}/leads", json=payload)
        assert r.status_code == 201
        data = r.json()
        assert data["source"] == "landing"

    def test_missing_email_returns_422(self, client):
        r = client.post(f"{API}/leads", json={"full_name": "TEST X"})
        assert r.status_code == 422

    def test_invalid_email_returns_422(self, client):
        r = client.post(
            f"{API}/leads", json={"full_name": "TEST X", "email": "not-an-email"}
        )
        assert r.status_code == 422

    def test_missing_full_name_returns_422(self, client):
        r = client.post(f"{API}/leads", json={"email": "ok@riad.ma"})
        assert r.status_code == 422

    def test_list_leads_sorted_desc(self, client):
        # Create two leads
        e1 = f"a_{uuid.uuid4().hex[:6]}@riad.ma"
        e2 = f"b_{uuid.uuid4().hex[:6]}@riad.ma"
        client.post(f"{API}/leads", json={"full_name": "TEST A", "email": e1})
        client.post(f"{API}/leads", json={"full_name": "TEST B", "email": e2})

        r = client.get(f"{API}/leads")
        assert r.status_code == 200
        leads = r.json()
        assert isinstance(leads, list)
        assert len(leads) >= 2
        # No _id in response
        assert all("_id" not in lead for lead in leads)
        # Sort desc by created_at
        ts = [lead["created_at"] for lead in leads]
        assert ts == sorted(ts, reverse=True)
        # Most recent one should be e2 (since created last)
        # not strict (might not be first if other concurrent inserts), but should be in top
        emails_top = [lead["email"] for lead in leads[:5]]
        assert e2 in emails_top


# ----- Sectors stats -----
class TestSectors:
    def test_sectors_payload(self, client):
        r = client.get(f"{API}/stats/sectors")
        assert r.status_code == 200
        body = r.json()
        assert "label_note" in body
        assert isinstance(body["label_note"], str) and len(body["label_note"]) > 0
        assert "sectors" in body
        assert isinstance(body["sectors"], list)
        assert len(body["sectors"]) == 8
        # Validate first item is top
        first = body["sectors"][0]
        assert "Ingénierie" in first["name"]
        assert first["offers"] == 2530
        for s in body["sectors"]:
            assert "name" in s and "offers" in s
            assert isinstance(s["offers"], int)
