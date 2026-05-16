import { useEffect, useRef, useState } from "react";
import { BarChart3, Info } from "lucide-react";
import Reveal from "./Reveal";
import { SECTORS } from "./constants";

export default function MarketData() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setAnimate(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAnimate(true)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const max = Math.max(...SECTORS.map((s) => s.offers));

  return (
    <section
      id="donnees"
      data-testid="data-section"
      className="relative py-24 sm:py-32 bg-soft-bg overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-cc-cyan/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-cc-lime/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-cc-cyan">
              <BarChart3 className="h-3.5 w-3.5" />
              Données officielles
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] mt-4 leading-tight text-ink tracking-tight text-balance">
              Les secteurs qui recrutent le plus sur CoinCarrière.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base sm:text-lg text-cc-navy/75 leading-relaxed">
              Un aperçu officiel des offres actives par secteur au Maroc, pour montrer la
              dynamique réelle de la plateforme.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div
            ref={ref}
            data-testid="market-chart"
            className="mt-14 bg-white rounded-3xl border border-cc-mid-blue/12 cc-shadow-soft p-6 sm:p-10"
          >
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-cc-navy/55">
                  Aperçu plateforme
                </p>
                <p className="font-display font-semibold text-cc-navy text-xl sm:text-2xl mt-1">
                  Offres actives par secteur
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-semibold text-cc-navy/65">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-6 rounded-full cc-bar-gradient-lime" />
                  Top secteur
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-6 rounded-full cc-bar-gradient" />
                  Autres secteurs
                </span>
              </div>
            </div>

            <ul className="space-y-4 sm:space-y-5">
              {SECTORS.map((s, i) => {
                const pct = (s.offers / max) * 100;
                return (
                  <li key={s.name} data-testid={`bar-row-${i}`} className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-12 sm:col-span-4">
                      <p className="text-sm font-semibold text-cc-navy leading-snug">{s.name}</p>
                    </div>
                    <div className="col-span-9 sm:col-span-7">
                      <div className="relative h-7 sm:h-8 rounded-full bg-soft-bg overflow-hidden">
                        <div
                          className={`bar-fill h-full rounded-full ${
                            s.top ? "cc-bar-gradient-lime" : "cc-bar-gradient"
                          }`}
                          style={{
                            width: animate ? `${pct}%` : "0%",
                            transitionDelay: `${i * 90}ms`,
                          }}
                        />
                        {s.top && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold tracking-wider uppercase text-cc-navy">
                            #1
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-1 text-right">
                      <span className="font-mono text-sm font-semibold text-cc-navy">
                        {s.offers.toLocaleString("fr-FR")}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-6 border-t border-cc-mid-blue/10 flex items-start gap-2.5 text-[12px] text-cc-navy/60 leading-relaxed">
              <Info className="h-4 w-4 shrink-0 mt-0.5 text-cc-cyan" />
              <p>
                Données affichées à titre d'aperçu plateforme. Ne pas présenter comme statistiques
                spécifiques aux Riads.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
