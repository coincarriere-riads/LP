import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings2,
  MessageSquare,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Calendar,
  Mail,
  Clock,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const STAGES = [
  {
    name: "Nouveau",
    count: 7,
    color: "from-cc-mid-blue/15 to-cc-mid-blue/5",
    cards: [
      { name: "Yassine M.", role: "Réceptionniste Riad", tag: "FR · AR · EN" },
      { name: "Karim H.", role: "Cuisinier petit-déjeuner", tag: "3 ans" },
    ],
  },
  {
    name: "Présélection",
    count: 4,
    color: "from-cc-cyan/20 to-cc-cyan/5",
    cards: [
      { name: "Salma B.", role: "Femme de chambre", tag: "Marrakech" },
      { name: "Imane R.", role: "Hôtesse d'accueil", tag: "2 ans" },
    ],
  },
  {
    name: "Entretien",
    count: 2,
    color: "from-cc-mid-blue/25 to-cc-cyan/10",
    cards: [{ name: "Nora T.", role: "Serveuse maison d'hôtes", tag: "Demain · 10h" }],
  },
  {
    name: "Retenu",
    count: 1,
    color: "from-cc-lime/40 to-cc-lime/10",
    cards: [{ name: "Hicham E.", role: "Polyvalent service", tag: "Offre envoyée" }],
  },
];

export default function DashboardDemo() {
  return (
    <section
      id="demo"
      data-testid="demo-section"
      className="relative py-24 sm:py-32 bg-soft-bg overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 h-[420px] w-[420px] rounded-full bg-cc-cyan/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-cc-cyan">
              Démo produit
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] mt-4 leading-tight text-ink tracking-tight text-balance">
              Découvrez CoinCarrière en action.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base sm:text-lg text-cc-navy/75 leading-relaxed max-w-2xl">
              Une simulation claire de l'espace recruteur pour visualiser comment un propriétaire de
              Riad peut suivre ses candidatures.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <span
              data-testid="demo-label"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-cc-lime/30 border border-cc-lime/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cc-navy"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cc-navy animate-pulse" />
              Simulation de démo — exemple Riad
            </span>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div
            data-testid="demo-dashboard"
            className="mt-14 rounded-3xl bg-white border border-cc-mid-blue/12 cc-shadow-soft overflow-hidden"
          >
            {/* Browser frame */}
            <div className="flex items-center justify-between bg-soft-bg/80 border-b border-cc-mid-blue/10 px-4 sm:px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4 hidden sm:flex">
                <div className="w-full max-w-md mx-auto rounded-md bg-white border border-cc-mid-blue/10 px-3 py-1 text-[11px] font-mono text-cc-navy/55 text-center">
                  app.coincarriere.com / recruteur / riad-marrakech
                </div>
              </div>
              <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider text-cc-navy/55">
                Espace recruteur
              </span>
            </div>

            <div className="grid lg:grid-cols-[230px_1fr]">
              {/* Sidebar */}
              <aside className="hidden lg:block border-r border-cc-mid-blue/10 bg-soft-bg/40 p-5">
                <div className="flex items-center gap-2 px-2 py-2">
                  <span className="h-7 w-7 rounded-lg bg-cc-navy text-cc-lime font-bold font-display text-xs flex items-center justify-center">
                    cc
                  </span>
                  <span className="font-display font-semibold text-cc-navy text-sm">CoinCarrière</span>
                </div>
                <nav className="mt-6 space-y-1">
                  {[
                    { i: LayoutDashboard, l: "Tableau de bord", active: false },
                    { i: Briefcase, l: "Mes annonces", active: true },
                    { i: Users, l: "Candidats" },
                    { i: Calendar, l: "Entretiens" },
                    { i: MessageSquare, l: "Messages" },
                    { i: TrendingUp, l: "Analytics" },
                    { i: Settings2, l: "Paramètres" },
                  ].map(({ i: Ic, l, active }) => (
                    <button
                      key={l}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                        active
                          ? "bg-white text-cc-navy border border-cc-mid-blue/15 cc-shadow-soft"
                          : "text-cc-navy/65 hover:bg-white/60"
                      }`}
                    >
                      <Ic className="h-4 w-4" />
                      <span className="text-left flex-1">{l}</span>
                      {active && <ChevronRight className="h-3.5 w-3.5" />}
                    </button>
                  ))}
                </nav>
                <div className="mt-8 rounded-xl bg-cc-navy text-white p-4">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-cc-lime">Astuce</p>
                  <p className="text-xs mt-1.5 text-white/80 leading-relaxed">
                    Préparez la haute saison : dupliquez une annonce existante en un clic.
                  </p>
                </div>
              </aside>

              {/* Main */}
              <div className="p-5 sm:p-7">
                {/* Top job header */}
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-cc-navy/60">
                      Besoin publié · Riad · Marrakech
                    </p>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl text-cc-navy mt-1">
                      Équipe complète — Haute saison 2026
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full bg-soft-bg border border-cc-mid-blue/15 px-4 py-2 text-xs font-semibold text-cc-navy">
                      Modifier
                    </button>
                    <button className="rounded-full bg-cc-navy text-white px-4 py-2 text-xs font-semibold">
                      Inviter mon équipe
                    </button>
                  </div>
                </div>

                {/* Filters */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 rounded-full bg-soft-bg border border-cc-mid-blue/10 px-3 py-1.5 text-[12px]">
                    <Search className="h-3.5 w-3.5 text-cc-navy/55" />
                    <span className="text-cc-navy/65">Rechercher un candidat</span>
                  </div>
                  {[
                    { l: "Métier · Réception" },
                    { l: "Compétence · Service" },
                    { l: "Expérience · 2+ ans" },
                    { l: "Localisation · Marrakech" },
                  ].map((f) => (
                    <span
                      key={f.l}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-cc-mid-blue/15 px-3 py-1.5 text-[12px] font-semibold text-cc-navy"
                    >
                      <SlidersHorizontal className="h-3 w-3 text-cc-cyan" />
                      {f.l}
                    </span>
                  ))}
                </div>

                {/* Pipeline columns */}
                <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {STAGES.map((s, i) => (
                    <div
                      key={s.name}
                      data-testid={`pipeline-${s.name.toLowerCase()}`}
                      className="rounded-2xl border border-cc-mid-blue/10 bg-white overflow-hidden"
                    >
                      <div className={`p-3 bg-gradient-to-br ${s.color} border-b border-cc-mid-blue/10`}>
                        <div className="flex items-center justify-between">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-cc-navy">
                            {s.name}
                          </p>
                          <span className="text-[11px] font-mono font-semibold text-cc-navy">
                            {s.count}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 space-y-2 min-h-[160px]">
                        {s.cards.map((c) => (
                          <div
                            key={c.name}
                            className="rounded-xl bg-soft-bg/60 border border-cc-mid-blue/10 p-2.5 hover:bg-white hover:border-cc-cyan/30 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cc-cyan to-cc-blue text-white text-[10px] font-bold flex items-center justify-center">
                                {c.name.split(" ").map((w) => w[0]).join("")}
                              </div>
                              <div className="min-w-0">
                                <p className="text-[12px] font-semibold text-cc-navy truncate">
                                  {c.name}
                                </p>
                                <p className="text-[10px] text-cc-navy/60 truncate">{c.role}</p>
                              </div>
                            </div>
                            <span className="mt-2 inline-block text-[10px] font-semibold text-cc-cyan bg-cc-cyan/10 rounded-full px-2 py-0.5">
                              {c.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats / mini cards */}
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      label: "Candidatures reçues",
                      hint: "Ce mois-ci",
                      icon: Mail,
                      body: "+14 nouvelles",
                    },
                    {
                      label: "Profils à examiner",
                      hint: "En attente",
                      icon: Users,
                      body: "9 prioritaires",
                    },
                    {
                      label: "Étapes du pipeline",
                      hint: "Aperçu",
                      icon: ChevronRight,
                      body: "4 étapes actives",
                    },
                  ].map((m, i) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-soft-bg/70 border border-cc-mid-blue/10 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <m.icon className="h-4 w-4 text-cc-cyan" />
                        <p className="text-[11px] font-bold uppercase tracking-wider text-cc-navy/60">
                          {m.label}
                        </p>
                      </div>
                      <p className="font-display font-semibold text-cc-navy text-lg mt-2">
                        {m.body}
                      </p>
                      <p className="text-[11px] text-cc-navy/55 mt-0.5">{m.hint}</p>
                    </div>
                  ))}
                </div>

                {/* Analytics mini-card */}
                <div className="mt-4 rounded-2xl bg-cc-navy text-white p-5 flex flex-wrap items-center gap-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-cc-lime" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-base">Analytics recruteur</p>
                      <p className="text-[12px] text-white/70">
                        Mesurez ce qui compte vraiment dans votre recrutement.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { i: Clock, l: "Temps d'embauche : visible dans l'espace recruteur" },
                      { i: TrendingUp, l: "Sources efficaces : à suivre" },
                      { i: SlidersHorizontal, l: "Taux de conversion : à optimiser" },
                    ].map((c) => (
                      <span
                        key={c.l}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-semibold"
                      >
                        <c.i className="h-3 w-3 text-cc-lime" />
                        {c.l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
