import { ArrowRight, BedDouble, Sparkles, ChefHat, ConciergeBell, Utensils, ShieldCheck, MapPin, Star } from "lucide-react";
import Reveal from "./Reveal";
import { RECRUITER_SIGNUP_URL } from "./constants";

const HERO_BG = "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxyaWFkJTIwbW9yb2NjbyUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDB8fHx8MTc3ODk1NjUxOXww&ixlib=rb-4.1.0&q=85";

function Stat({ value, label, accent }) {
  return (
    <div data-testid={`hero-stat-${label.toLowerCase().split(" ").join("-")}`} className="flex flex-col">
      <span
        className={`font-display font-bold text-2xl sm:text-3xl ${accent ? "text-cc-lime-2" : "text-cc-navy"}`}
      >
        {value}
      </span>
      <span className="text-xs sm:text-[13px] text-cc-navy/65 mt-1">{label}</span>
    </div>
  );
}

/* ----- Recruitment Compass (Unexpected Design Move — pure SVG) ----- */
function Compass() {
  return (
    <div
      aria-hidden
      data-testid="hero-compass"
      className="pointer-events-none absolute -inset-6 sm:-inset-10 flex items-center justify-center"
    >
      {/* Soft outer glow */}
      <div className="absolute h-[110%] w-[110%] max-h-[680px] max-w-[680px] rounded-full bg-radial-fade blur-2xl opacity-80" />
      {/* Compass dial */}
      <div className="relative h-[88%] w-[88%] max-w-[560px] max-h-[560px]">
        {/* Rotating ticks ring */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full animate-compass-spin"
          style={{ filter: "drop-shadow(0 12px 30px rgba(0,148,217,0.18))" }}
        >
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0094d9" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#1875bb" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#16498c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Concentric rings */}
          <circle cx="200" cy="200" r="195" fill="none" stroke="url(#ringGrad)" strokeWidth="1.2" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="170" fill="none" stroke="#1875bb" strokeOpacity="0.18" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#0094d9" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="1 4" />
          {/* Ticks */}
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = (i * 360) / 72;
            const isMajor = i % 9 === 0;
            const r1 = isMajor ? 158 : 168;
            const r2 = 188;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={200 + Math.cos(rad) * r1}
                y1={200 + Math.sin(rad) * r1}
                x2={200 + Math.cos(rad) * r2}
                y2={200 + Math.sin(rad) * r2}
                stroke={isMajor ? "#0b3f59" : "#1875bb"}
                strokeOpacity={isMajor ? 0.55 : 0.22}
                strokeWidth={isMajor ? 1.6 : 0.9}
              />
            );
          })}
        </svg>

        {/* Static inner circle with subtle gradient */}
        <div
          className="absolute inset-[12%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, rgba(245,251,255,0.1) 60%, transparent 100%)",
            border: "1px solid rgba(24,117,187,0.18)",
          }}
        />

        {/* Cardinal labels (static) */}
        <div className="absolute inset-0">
          {[
            { pos: "top-2 left-1/2 -translate-x-1/2", t: "Besoin urgent" },
            { pos: "right-2 top-1/2 -translate-y-1/2", t: "Tri rapide" },
            { pos: "bottom-2 left-1/2 -translate-x-1/2", t: "Bon recrutement" },
            { pos: "left-2 top-1/2 -translate-y-1/2", t: "Pipeline clair" },
          ].map((p) => (
            <span
              key={p.t}
              className={`absolute ${p.pos} text-[10px] tracking-[0.18em] uppercase font-semibold text-cc-navy/55 whitespace-nowrap`}
            >
              {p.t}
            </span>
          ))}
        </div>

        {/* Animated needle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[60%] w-[60%]">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full origin-bottom h-[50%] w-[3px] rounded-full animate-compass-needle"
              style={{
                background: "linear-gradient(180deg, #0094d9 0%, #16498c 100%)",
                boxShadow: "0 0 20px rgba(0,148,217,0.55)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 origin-top h-[36%] w-[3px] rounded-full opacity-60 animate-compass-needle"
              style={{ background: "linear-gradient(180deg, #16498c 0%, transparent 100%)" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-cc-lime ring-4 ring-cc-navy" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----- Glass dashboard card preview ----- */
function HeroDashboard() {
  const candidates = [
    { name: "Yassine M.", role: "Réceptionniste", stage: "Présélection", icon: ConciergeBell },
    { name: "Salma B.", role: "Femme de chambre", stage: "Entretien", icon: BedDouble },
    { name: "Karim H.", role: "Cuisinier petit-déjeuner", stage: "Nouveau", icon: ChefHat },
    { name: "Nora T.", role: "Serveuse maison d'hôtes", stage: "Retenu", icon: Utensils },
  ];

  return (
    <div className="relative animate-float-y">
      <div
        data-testid="hero-dashboard"
        className="cc-glass cc-shadow-soft rounded-3xl p-5 sm:p-6 w-full"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-cc-navy/55">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/60 border border-cc-mid-blue/10">
              <ShieldCheck className="h-3 w-3 text-cc-cyan" />
              app.coincarriere.com
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-cc-cyan">
            Aperçu recruteur
          </span>
        </div>

        {/* Job header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cc-navy/65 uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5" />
              Besoin publié · Riad · Marrakech
            </span>
            <h3 className="font-display font-semibold text-cc-navy text-lg sm:text-xl mt-1">
              Équipe complète — Haute saison 2026
            </h3>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-cc-lime/40 text-cc-navy text-[11px] font-bold px-2.5 py-1">
            <Sparkles className="h-3 w-3" /> Actif
          </span>
        </div>

        {/* Role chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {["Réception", "Ménage", "Cuisine", "Service", "Accueil"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-white/80 border border-cc-mid-blue/15 text-[11px] font-semibold text-cc-navy"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Pipeline */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {["Nouveau", "Présélection", "Entretien", "Retenu"].map((stage, i) => (
            <div key={stage} className="rounded-xl bg-white/70 border border-cc-mid-blue/10 p-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cc-navy/70">{stage}</span>
                <span className="text-[10px] font-mono text-cc-cyan">{[7, 4, 2, 1][i]}</span>
              </div>
              <div className="mt-1.5 h-1 rounded-full overflow-hidden bg-cc-mid-blue/10">
                <div
                  className="h-full cc-bar-gradient"
                  style={{ width: `${[80, 55, 35, 20][i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Candidate cards */}
        <div className="space-y-2">
          {candidates.map((c, idx) => (
            <div
              key={c.name}
              className="flex items-center gap-3 rounded-xl bg-white/85 border border-cc-mid-blue/10 px-3 py-2.5 hover:border-cc-cyan/30 transition-colors"
            >
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cc-cyan to-cc-blue flex items-center justify-center text-white">
                <c.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-cc-navy truncate">{c.name}</p>
                <p className="text-[11px] text-cc-navy/60 truncate">{c.role}</p>
              </div>
              <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider text-cc-navy/65 px-2 py-1 rounded-full bg-soft-bg">
                {c.stage}
              </span>
              <div className="flex items-center gap-0.5 text-cc-lime-2">
                {[...Array(idx === 3 ? 5 : 4)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-cc-navy/45 text-center">
          Simulation de démo — exemple Riad
        </p>
      </div>

      {/* Floating side metric */}
      <div className="hidden md:flex absolute -left-8 top-12 cc-glass rounded-2xl px-4 py-3 items-center gap-2.5 animate-pulse-glow">
        <span className="h-2 w-2 rounded-full bg-cc-lime animate-pulse" />
        <div>
          <p className="text-[10px] uppercase tracking-wider text-cc-navy/55 font-semibold">Candidatures</p>
          <p className="font-display font-bold text-cc-navy text-lg leading-none">+14 cette semaine</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Background composition */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soft-bg via-soft-bg/90 to-soft-bg" />
        <div className="absolute inset-0 bg-grid-soft [background-size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="relative z-10">
          <Reveal>
            <span
              data-testid="hero-badge"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-cc-mid-blue/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cc-navy"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cc-lime-2" />
              Pour propriétaires de Riads · Maroc
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              data-testid="hero-headline"
              className="font-display font-bold text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-ink mt-6 text-balance"
            >
              Le recrutement de votre Riad,
              <span className="block cc-gradient-text">enfin simplifié.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p
              data-testid="hero-subtitle"
              className="mt-6 text-base sm:text-lg text-cc-navy/75 max-w-xl leading-relaxed"
            >
              Trouvez plus facilement du personnel fiable pour la réception, le ménage,
              la cuisine, le service ou l'accueil — sans perdre du temps avec des
              candidatures inutiles.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={RECRUITER_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 rounded-full bg-cc-navy text-white px-7 py-3.5 font-semibold text-[15px] hover:bg-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(11,63,89,0.45)]"
              >
                Publier mon besoin maintenant
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cc-navy/70">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cc-lime/60">
                  <ShieldCheck className="h-3 w-3 text-cc-navy" />
                </span>
                100% gratuit pour commencer
              </span>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg pt-6 border-t border-cc-mid-blue/15">
              <Stat value="462+" label="entreprises recrutent" />
              <Stat value="4 949+" label="offres publiées" />
              <Stat value="100%" label="gratuit pour commencer" accent />
            </div>
          </Reveal>
        </div>

        {/* RIGHT — compass + dashboard */}
        <div className="relative h-[560px] sm:h-[620px] lg:h-[640px] flex items-center justify-center">
          <Compass />
          <div className="relative z-10 w-full max-w-[460px] sm:max-w-[500px]">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
