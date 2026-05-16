export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="bg-soft-bg border-t border-cc-mid-blue/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden bg-ink ring-1 ring-cc-mid-blue/15">
            <img
              src="/brand/coincarriere-logo.png"
              alt="CoinCarrière"
              className="h-full w-full object-contain p-0.5"
              draggable={false}
            />
          </span>
          <span className="font-display font-semibold text-cc-navy text-sm tracking-tight">
            CoinCarrière
          </span>
        </div>
        <p className="text-xs text-cc-navy/55">
          © {year} CoinCarrière · Conçu au Maroc, pensé pour l'hospitalité.
        </p>
      </div>
    </footer>
  );
}
