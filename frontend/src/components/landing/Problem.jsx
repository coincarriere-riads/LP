import { ClipboardX, Clock4, Filter, AlertTriangle } from "lucide-react";
import Reveal from "./Reveal";

const CARDS = [
  {
    icon: ClipboardX,
    title: "Candidatures non adaptées",
    body: "Vous recevez des profils hors sujet, sans expérience hôtelière, et perdez un temps précieux à les écarter.",
  },
  {
    icon: Clock4,
    title: "Urgence en haute saison",
    body: "Avril, mai, juillet, août, décembre… la pression monte vite. Vous devez recruter avant les premières réservations.",
  },
  {
    icon: Filter,
    title: "Manque de temps pour trier",
    body: "Entre la gestion du Riad et les imprévus, il devient difficile de comparer sereinement plusieurs candidatures.",
  },
  {
    icon: AlertTriangle,
    title: "Un mauvais recrutement coûte cher",
    body: "Un seul profil inadapté à l'accueil ou en cuisine peut peser sur les avis clients et la réputation du Riad.",
  },
];

export default function Problem() {
  return (
    <section
      id="realite"
      data-testid="problem-section"
      className="relative py-16 sm:py-24 bg-cream/40 cc-grain overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-soft-bg via-cream/60 to-soft-bg" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-cc-cyan">
              Votre réalité
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-ink mt-4 text-balance leading-tight">
              Vous gérez déjà <span className="cc-gradient-text">assez de choses.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base sm:text-lg text-cc-navy/75 leading-relaxed">
              Clients, réservations, qualité de service, équipe, imprévus, avis clients… le
              recrutement ne doit pas devenir une charge supplémentaire dans la gestion de votre Riad.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article
                data-testid={`problem-card-${i}`}
                className="group h-full bg-white rounded-2xl border border-cc-mid-blue/12 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cc-cyan/30 hover:shadow-[0_30px_50px_-25px_rgba(11,63,89,0.25)]"
              >
                <div className="h-11 w-11 rounded-xl bg-soft-bg border border-cc-mid-blue/10 flex items-center justify-center group-hover:bg-cc-lime/30 transition-colors">
                  <c.icon className="h-5 w-5 text-cc-navy" />
                </div>
                <h3 className="font-display font-semibold text-cc-navy text-lg mt-5">{c.title}</h3>
                <p className="mt-2.5 text-sm text-cc-navy/70 leading-relaxed">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
