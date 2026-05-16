import { ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { RECRUITER_SIGNUP_URL } from "./constants";

export default function FinalCTA() {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-20 sm:py-28 overflow-hidden bg-cc-navy"
    >
      {/* Premium dark navy background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cc-navy via-ink to-cc-navy" />
        <div className="absolute inset-0 bg-grid-soft [background-size:48px_48px] opacity-[0.06]" />
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-cc-cyan/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[440px] w-[440px] rounded-full bg-cc-lime/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center text-white">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cc-lime">
            <Sparkles className="h-3 w-3" />
            Lancez-vous aujourd'hui
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-[58px] leading-[1.04] tracking-tight mt-5 text-white text-balance">
            Votre prochain bon recrutement
            <span className="block text-cc-lime">commence ici.</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Ne laissez pas un manque de personnel ralentir votre Riad. Créez votre espace
            recruteur et publiez votre première annonce en moins de 5 minutes.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={RECRUITER_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-primary"
              className="group inline-flex items-center gap-2 rounded-full bg-cc-lime text-cc-navy px-7 py-3.5 font-bold text-[15px] hover:bg-cc-lime-2 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-12px_rgba(220,254,17,0.5)]"
            >
              Créer mon compte recruteur
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-cc-lime animate-pulse" />
              100% gratuit pour commencer
            </span>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] sm:text-[13px] text-white/65">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-cc-lime" />
              Annonce en ligne en moins de 5 minutes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-cc-lime" />
              Plateforme de recrutement marocaine
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cc-lime" />
              Pensé pour les Riads et l'hospitalité
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
