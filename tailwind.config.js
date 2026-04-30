/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'dark-navy': 'var(--dark-navy)',
        'teal-accent': 'var(--teal-accent)',
        'soft-background': 'var(--soft-background)',
        'card-white': 'var(--card-white)',
        'border-color': 'var(--border-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'error-red': 'var(--error-red)',
        'success-green': 'var(--success-green)',
        'warning-amber': 'var(--warning-amber)',
        'whatsapp-green': 'var(--whatsapp-green)',
      },
      fontFamily: {
        'display': 'var(--font-display)',
        'sans': 'var(--font-sans)',
        'mono': 'var(--font-mono)',
      },
    },
  },
  plugins: [],
}
