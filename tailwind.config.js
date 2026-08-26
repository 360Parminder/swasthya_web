/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0764',
        },
      },
      fontFamily: {
        sans: ['"Cantarell"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Cantarell"', 'sans-serif'],
        cantarell: ['"Cantarell"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'phone': '0 25px 60px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        'phone-elevated': '0 35px 80px -20px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'glow-brand': '0 10px 30px -5px rgba(124, 58, 237, 0.3)',
      },
    },
  },
  plugins: [],
}

