/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      fontSize: {
        'custom-22': '22px',
        'custom-24': '24px',
        'custom-60': '60px',
        'custom-50': '50px',
        'custom-36': '36px'// Define your custom font size
      },
      lineHeight: {
        'custom-30': '30.01px',
        'custom-73': '73.14px',
        'custom-32': '32.74px',
        'custom-60': '60.95px',
        'custom-49': '49.1px'// Define your custom line height
      },
      borderRadius: {
        'custom-20': '20px',
        'custom-30': '30px',
        'custom-40': '40px',
        'custom-50': '50px'// Define your custom border radius
      },
    },
  },
  plugins: [],
}