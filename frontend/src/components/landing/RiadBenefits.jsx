import { ConciergeBell, BedDouble, ChefHat, Utensils, CalendarRange, Star } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: ConciergeBell,
    title: "Réception plus simple",
    body: "Un accueil fluide, un check-in chaleureux : recrutez des réceptionnistes qui parlent les langues de vos clients.",
    span: "sm:col-span-2",
  },
  {
    icon: BedDouble,
    title: "Ménage et chambres",
    body: "Des équipes de chambre fiables, ponctuelles et formées à vos standards de propreté.",
  },
  {
    icon: ChefHat,
    title: "Cuisine & petit-déjeuner",
    body: "Cuisiniers, aides en cuisine et pâtissiers maison capables de tenir votre carte du matin.",
  },
  {
    icon: Utensils,
    title: "Service et accueil",
    body: "Serveurs, runners, polyvalents : recrutez des profils dédiés à l'expérience client.",
    span: "sm:col-span-2",
  },
  {
    icon: CalendarRange,
    title: "Haute saison sereine",
    body: "Anticipez les pics de Marrakech, Essaouira ou Chefchaouen avec un vivier prêt avant la saison.",
  },
  {
    icon: Star,
    title: "Qualité de service & avis",
    body: "Mieux recruter, c'est mieux servir : protégez votre note sur les plateformes de réservation.",
  },
];

export default function RiadBenefits() {
  return (
    <section
      data-testid="benefits-section"
      className="relative py-24 sm:py-32 bg-cream/30"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-cc-cyan">
              Pour les Riads
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] mt-4 leading-tight text-ink tracking-tight text-balance">
              Conçu pour la réalité d'un Riad au Maroc.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base sm:text-lg text-cc-navy/75 leading-relaxed">
              Pas de jargon RH. Une plateforme qui parle votre quotidien : accueil, propreté,
              service, cuisine, haute saison, avis clients.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 70} className={it.span || ""}>
              <article
                data-testid={`benefit-${i}`}
                className="group relative h-full overflow-hidden rounded-2xl bg-white border border-cc-mid-blue/12 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cc-cyan/30"
              >
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cc-cyan/0 group-hover:bg-cc-cyan/10 blur-2xl transition-all duration-500"
                  aria-hidden
                />
                <div className="h-11 w-11 rounded-xl bg-soft-bg border border-cc-mid-blue/10 flex items-center justify-center group-hover:bg-cc-lime/30 transition-colors">
                  <it.icon className="h-5 w-5 text-cc-navy" />
                </div>
                <h3 className="font-display font-semibold text-cc-navy text-lg mt-5">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-sm text-cc-navy/70 leading-relaxed">{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
