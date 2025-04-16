/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  
      "./pages/**/*.{js,ts,jsx,tsx}", 
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
           'white': '#ffffff',
           'gray-300': '#C6C7C6',
           'primary-500': '#F85B93',
      },
    },
    plugins: [],
  };
  