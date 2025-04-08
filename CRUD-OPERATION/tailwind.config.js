/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'blue-white': '#e2ecf5',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray': 'rgba(108, 108, 108, 1)',
      'gray-white': '#f8f8f8',
      'yellow': '#f8d440',
      'yellow-dark': '#ffaf00',
      'black': '#000',
      'white': '#fff',
      'red': '#FE2020',
      'pale-white': '#f2e9e0',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.35rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

