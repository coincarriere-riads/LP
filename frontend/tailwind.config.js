/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // CoinCarrière brand tokens
        'cc-cyan': '#0094d9',
        'cc-blue': '#16498c',
        'cc-mid-blue': '#1875bb',
        'cc-navy': '#0b3f59',
        'cc-lime': '#dcfe11',
        'cc-lime-2': '#ccfa04',
        'cc-green': '#b4dc02',
        'soft-bg': '#f5fbff',
        'cream': '#fbf5ea',
        'ink': '#102532',
        // Shadcn tokens preserved
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'compass-spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'compass-needle': {
          '0%': { transform: 'rotate(-25deg)' },
          '25%': { transform: 'rotate(45deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(60deg)' },
          '100%': { transform: 'rotate(-25deg)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'compass-spin': 'compass-spin 60s linear infinite',
        'compass-needle': 'compass-needle 8s ease-in-out infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      backgroundImage: {
        'grid-soft': "linear-gradient(to right, rgba(11,63,89,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,63,89,0.06) 1px, transparent 1px)",
        'radial-fade': "radial-gradient(ellipse at center, rgba(0,148,217,0.15) 0%, transparent 60%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
