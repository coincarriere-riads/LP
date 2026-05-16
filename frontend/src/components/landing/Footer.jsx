export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="bg-soft-bg border-t border-cc-mid-blue/10 py-14"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-xl bg-cc-navy text-cc-lime flex items-center justify-center font-display font-bold text-xs">
              cc
            </span>
            <span className="font-display font-semibold text-ink">CoinCarrière</span>
          </div>
          <p className="mt-4 text-sm text-cc-navy/65 leading-relaxed max-w-xs">
            Plateforme de recrutement marocaine. Le bon profil, plus vite, pour les Riads et l'hospitalité.
          </p>
        </div>

        <FooterCol
          title="Plateforme"
          links={[
            { href: "https://coincarriere.com", label: "Espace Candidat" },
            { href: "https://coincarriere.com/register?type=company", label: "Espace Recruteur" },
            { href: "#fonctionnalites", label: "Fonctionnalités" },
            { href: "#demo", label: "Démo" },
          ]}
        />

        <FooterCol
          title="Entreprise"
          links={[
            { href: "https://coincarriere.com/blog", label: "Blog" },
            { href: "mailto:contact@coincarriere.com", label: "Contact" },
            { href: "https://coincarriere.com/about", label: "À propos" },
          ]}
        />

        <FooterCol
          title="Légal"
          links={[
            { href: "https://coincarriere.com/privacy", label: "Confidentialité" },
            { href: "https://coincarriere.com/terms", label: "Conditions" },
            { href: "https://coincarriere.com/cookies", label: "Cookies" },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-10 pt-6 border-t border-cc-mid-blue/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-cc-navy/55">
          © {year} CoinCarrière. Tous droits réservés.
        </p>
        <p className="text-xs text-cc-navy/55">
          Conçu au Maroc · Pensé pour l'hospitalité.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cc-navy/60">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-cc-navy/75 hover:text-cc-navy hover:underline underline-offset-4 transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
