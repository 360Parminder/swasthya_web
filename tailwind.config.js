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
          50: '#fff1f0',
          100: '#ffe1df',
          200: '#ffc8c5',
          300: '#ffa29d',
          400: '#ff6f68',
          500: '#f0433a',
          600: '#de2820',
          700: '#ba1e17',
          800: '#991c17',
          900: '#7f1d19',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'phone': '0 25px 60px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        'phone-elevated': '0 35px 80px -20px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'glow-brand': '0 10px 30px -5px rgba(240, 67, 58, 0.3)',
      },
    },
  },
  plugins: [],
}

