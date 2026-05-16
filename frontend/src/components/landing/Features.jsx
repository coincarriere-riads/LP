import {
  Kanban,
  UsersRound,
  CalendarClock,
  Globe,
  LineChart,
  LifeBuoy,
} from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Kanban,
    title: "Pipeline visuel",
    body: "Suivez chaque candidat dans un pipeline clair, de la nouvelle candidature à l'embauche.",
  },
  {
    icon: UsersRound,
    title: "Travail en équipe",
    body: "Partagez les notes, les évaluations et les décisions avec votre équipe.",
  },
  {
    icon: CalendarClock,
    title: "Entretiens intégrés",
    body: "Planifiez les entretiens et centralisez les retours au même endroit.",
  },
  {
    icon: Globe,
    title: "Page carrière",
    body: "Présentez vos offres dans un espace professionnel à votre image.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    body: "Suivez le temps d'embauche, les sources efficaces et les conversions.",
  },
  {
    icon: LifeBuoy,
    title: "Accompagnement dédié",
    body: "Bénéficiez d'un accompagnement pour publier de meilleures annonces.",
  },
];

export default function Features() {
  return (
    <section
      id="fonctionnalites"
      data-testid="features-section"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-cc-cyan">
              Fonctionnalités
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] mt-4 leading-tight text-ink tracking-tight text-balance">
              Tout ce qu'il faut pour recruter, sans complexité.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <article
                data-testid={`feature-${i}`}
                className="group h-full rounded-2xl bg-white border border-cc-mid-blue/12 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cc-cyan/30 hover:shadow-[0_30px_50px_-25px_rgba(11,63,89,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-cc-navy text-cc-lime flex items-center justify-center group-hover:bg-ink transition-colors">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-cc-navy/45">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-cc-navy text-xl mt-6">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm text-cc-navy/70 leading-relaxed">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
