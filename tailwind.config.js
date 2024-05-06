/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        volunteer: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#bae2fd',
          300: '#7cccfd',
          400: '#37b3f9',
          500: '#0d99ea',
          600: '#0173bd',
          700: '#0260a2',
          800: '#065286',
          900: '#0c456e',
          950: '#082c49',
        },
      },
      backgroundImage: {
        'home-hero-wide-1': 'url("/volunteer-chefs.jpg")',
        'home-hero-wide-2': 'url("/food-pantry-delivery.jpg")',
        'home-hero-vert': 'url("/food-pantry-delivery-reversed.jpg")',
        'about-hero': 'url("/kid-with-jacket.jpg")',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
