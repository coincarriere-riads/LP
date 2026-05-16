import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, RECRUITER_SIGNUP_URL } from "./constants";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-soft-bg/85 backdrop-blur-xl border-b border-cc-mid-blue/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl overflow-hidden bg-ink ring-1 ring-cc-mid-blue/15">
            <img
              src="/brand/coincarriere-logo.png"
              alt="CoinCarrière"
              className="h-full w-full object-contain scale-110"
              draggable={false}
            />
          </span>
          <span className="font-display font-semibold text-ink tracking-tight text-[17px] hidden sm:inline">
            CoinCarrière
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1 cc-glass rounded-full px-2 py-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace("#", "")}`}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-cc-navy/80 hover:text-cc-navy hover:bg-white/70 transition-colors cc-focus"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={RECRUITER_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta-publish"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cc-navy text-white px-5 py-2.5 text-sm font-semibold hover:bg-ink transition-colors cc-focus group"
          >
            Publier mon besoin
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            data-testid="nav-toggle-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-cc-mid-blue/15 bg-white/70"
          >
            {open ? <X className="h-5 w-5 text-cc-navy" /> : <Menu className="h-5 w-5 text-cc-navy" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="nav-mobile-panel"
          className="lg:hidden border-t border-cc-mid-blue/10 bg-soft-bg/95 backdrop-blur-xl"
        >
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-xl text-cc-navy font-medium hover:bg-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={RECRUITER_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-cc-navy text-white px-5 py-3 font-semibold"
              data-testid="nav-cta-publish-mobile"
            >
              Publier mon besoin <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
