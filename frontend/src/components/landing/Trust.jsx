import { Building2, Briefcase, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

const METRICS = [
  { icon: Building2, value: "462+", label: "entreprises recrutent sur CoinCarrière" },
  { icon: Briefcase, value: "4 949+", label: "offres actives publiées" },
  { icon: BadgeCheck, value: "100%", label: "gratuit pour commencer", accent: true },
];

export default function Trust() {
  return (
    <section
      data-testid="trust-section"
      className="relative py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-cc-cyan">
                Plateforme officielle
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-tight text-ink mt-4 text-balance">
                Une plateforme déjà utilisée par des recruteurs au Maroc.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base sm:text-lg text-cc-navy/75 leading-relaxed max-w-xl">
                Pour un propriétaire de Riad, la confiance est essentielle. CoinCarrière apporte un
                cadre clair pour publier un besoin, recevoir des candidatures et suivre le recrutement
                dans un seul espace.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div
                  data-testid={`trust-metric-${i}`}
                  className={`relative h-full rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                    m.accent
                      ? "bg-cc-navy text-white border-cc-navy"
                      : "bg-white border-cc-mid-blue/12"
                  }`}
                >
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                      m.accent ? "bg-cc-lime text-cc-navy" : "bg-soft-bg text-cc-navy"
                    }`}
                  >
                    <m.icon className="h-5 w-5" />
                  </div>
                  <p
                    className={`font-display font-bold text-3xl sm:text-4xl mt-6 ${
                      m.accent ? "text-cc-lime" : "text-ink"
                    }`}
                  >
                    {m.value}
                  </p>
                  <p
                    className={`mt-2 text-sm leading-snug ${
                      m.accent ? "text-white/85" : "text-cc-navy/70"
                    }`}
                  >
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
