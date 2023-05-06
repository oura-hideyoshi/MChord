/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#C4D0D3',
          500: '#8CA5AC',
          700: '#4e707b',
          950: '#12404E',
        },
      },
    },
  },
}
