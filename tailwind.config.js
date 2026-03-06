/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-bg)',
        'surface-card': 'var(--color-card-bg)',
        'surface-nav': 'var(--color-nav-bg)',
        primary: 'var(--color-primary)',
        'body-text': 'var(--color-text)',
        heading: 'var(--color-heading)',
      },
    },
  },
  plugins: [],
}


