/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // <--- TRES IMPORTANT pour Next.js App Router
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // AJOUTE CECI :
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards', // 'forwards' garde l'état final (visible)
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'slow-zoom': 'slow-zoom 20s linear infinite alternate',
      }
    },
  },
  plugins: [],
};