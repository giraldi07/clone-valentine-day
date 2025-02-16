/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'lobster-two': ['Lobster Two', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'league-spartan': ['League Spartan'],
        'breathing-personal-use-400': ['Breathing'],
      }
    },
  },
  plugins: [],
};