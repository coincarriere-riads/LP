import { useState } from "react";
import axios from "axios";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { RECRUITER_SIGNUP_URL } from "./constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function FinalCTA() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    riad_name: "",
    city: "",
    need: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim()) {
      setStatus({ state: "error", message: "Merci de renseigner votre nom et email." });
      return;
    }
    setStatus({ state: "loading", message: "" });
    try {
      await axios.post(`${API}/leads`, { ...form, source: "landing-final-cta" });
      setStatus({
        state: "success",
        message: "Merci ! Votre demande est enregistrée. Vous allez être redirigé vers la création de votre compte recruteur.",
      });
      // Open external signup in new tab after short delay
      setTimeout(() => {
        window.open(RECRUITER_SIGNUP_URL, "_blank", "noopener,noreferrer");
      }, 900);
    } catch (err) {
      setStatus({
        state: "error",
        message: "Une erreur est survenue. Réessayez ou cliquez sur le bouton ci-dessous.",
      });
    }
  };

  return (
    <section
      data-testid="final-cta-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cc-navy via-ink to-cc-navy" />
        <div className="absolute inset-0 bg-grid-soft [background-size:48px_48px] opacity-[0.06]" />
        <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-cc-cyan/20 blur-[120px]" />
        <div className="absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-cc-lime/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cc-lime">
              <Sparkles className="h-3 w-3" />
              Lancez-vous aujourd'hui
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[52px] leading-[1.05] tracking-tight mt-5 text-balance">
              Votre prochain bon recrutement
              <span className="block text-cc-lime">commence ici.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base sm:text-lg text-white/75 max-w-lg leading-relaxed">
              Ne laissez pas un manque de personnel ralentir votre Riad. Créez votre espace
              recruteur et publiez votre première annonce en moins de 5 minutes.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={RECRUITER_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="final-cta-primary"
                className="group inline-flex items-center gap-2 rounded-full bg-cc-lime text-cc-navy px-7 py-3.5 font-bold text-[15px] hover:bg-cc-lime-2 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(220,254,17,0.45)]"
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
        </div>

        {/* Lead capture form */}
        <Reveal delay={260}>
          <form
            onSubmit={onSubmit}
            data-testid="lead-form"
            className="cc-glass cc-shadow-soft rounded-3xl p-6 sm:p-8 bg-white/95"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cc-cyan">
              Demande express
            </p>
            <h3 className="font-display font-semibold text-cc-navy text-xl sm:text-2xl mt-2 leading-tight">
              Décrivez votre besoin — nous préparons votre espace.
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field
                label="Nom complet *"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                placeholder="Ex. Houda Bennani"
                testid="lead-field-name"
              />
              <Field
                label="Email *"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vous@riad.ma"
                testid="lead-field-email"
              />
              <Field
                label="Téléphone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+212 …"
                testid="lead-field-phone"
              />
              <Field
                label="Nom du Riad"
                name="riad_name"
                value={form.riad_name}
                onChange={handleChange}
                placeholder="Riad …"
                testid="lead-field-riad"
              />
              <Field
                label="Ville"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Marrakech, Fès, Essaouira…"
                testid="lead-field-city"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-cc-navy/65 mb-1.5">
                  Postes recherchés
                </label>
                <textarea
                  name="need"
                  rows={3}
                  value={form.need}
                  onChange={handleChange}
                  data-testid="lead-field-need"
                  placeholder="Ex. 1 réceptionniste, 2 femmes de chambre, 1 cuisinier petit-déjeuner pour la haute saison."
                  className="w-full rounded-xl bg-soft-bg/60 border border-cc-mid-blue/15 px-3.5 py-2.5 text-sm text-cc-navy placeholder:text-cc-navy/40 focus:outline-none focus:border-cc-cyan focus:bg-white transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              data-testid="lead-submit"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-cc-navy text-white px-6 py-3.5 font-semibold text-[15px] hover:bg-ink transition disabled:opacity-60"
            >
              {status.state === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Envoyer et créer mon espace
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {status.state === "success" && (
              <div
                data-testid="lead-success"
                className="mt-4 flex items-start gap-2 rounded-xl bg-cc-lime/30 border border-cc-lime/60 px-4 py-3 text-sm text-cc-navy"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}
            {status.state === "error" && (
              <div
                data-testid="lead-error"
                className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
              >
                {status.message}
              </div>
            )}

            <p className="mt-4 text-[11px] text-cc-navy/55 leading-relaxed">
              En envoyant ce formulaire, vous acceptez d'être contacté par CoinCarrière au sujet de
              votre espace recruteur.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", testid, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-cc-navy/65 mb-1.5">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full rounded-xl bg-soft-bg/60 border border-cc-mid-blue/15 px-3.5 py-2.5 text-sm text-cc-navy placeholder:text-cc-navy/40 focus:outline-none focus:border-cc-cyan focus:bg-white transition"
      />
    </label>
  );
}
