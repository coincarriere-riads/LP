export default function Footer() {
  const year = new Date().getFullYear();
  const logoSrc = `${process.env.PUBLIC_URL}/brand/coincarriere-logo.png`;

  return (
    <footer
      data-testid="site-footer"
      className="bg-white border-t border-cc-mid-blue/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <img
          src={logoSrc}
          alt="CoinCarrière"
          className="h-12 w-auto object-contain select-none"
          draggable={false}
        />
        <p className="text-xs text-cc-navy/55 text-center sm:text-right">
          © {year} CoinCarrière · Conçu au Maroc, pensé pour l'hospitalité.
        </p>
      </div>
    </footer>
  );
}
