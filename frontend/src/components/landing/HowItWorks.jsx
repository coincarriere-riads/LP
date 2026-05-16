import { useEffect, useRef, useState } from "react";
import { Send, Inbox, ListChecks, Handshake } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Send,
    title: "Publiez",
    body: "Décrivez le poste et les compétences recherchées. Votre annonce est en ligne en quelques minutes.",
  },
  {
    icon: Inbox,
    title: "Recevez",
    body: "Les candidats postulent directement. Filtrez par compétence, expérience ou localisation.",
  },
  {
    icon: ListChecks,
    title: "Évaluez",
    body: "Déplacez les candidats dans votre pipeline, laissez des notes et planifiez les entretiens.",
  },
  {
    icon: Handshake,
    title: "Embauchez",
    body: "Envoyez l'offre au candidat retenu et suivez la réponse, sans email perdu.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="methode"
      data-testid="how-section"
      className="relative py-16 sm:py-24 bg-ink text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-0 bg-grid-soft [background-size:48px_48px] opacity-[0.06]" />
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-cc-cyan/15 blur-[120px]" />
      <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-cc-lime/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-cc-lime">
              Méthode CoinCarrière
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] mt-4 leading-tight text-white tracking-tight text-balance">
              Du besoin urgent à l'embauche, <br className="hidden sm:block" />
              <span className="text-cc-lime">en 4 étapes simples.</span>
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="mt-12 sm:mt-16 relative">
          {/* Connecting animated line */}
          <div className="hidden lg:block absolute top-[58px] left-[8%] right-[8%]">
            <div className={`step-line ${visible ? "is-visible" : ""}`} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article
                  data-testid={`step-card-${i}`}
                  className="relative h-full rounded-2xl p-6 sm:p-7 cc-glass-dark hover:border-cc-cyan/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-cc-lime">
                      ÉTAPE 0{i + 1}
                    </span>
                    <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <s.icon className="h-5 w-5 text-cc-lime" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-2xl mt-6 text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
