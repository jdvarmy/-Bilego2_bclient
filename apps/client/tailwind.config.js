/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('tailwind/tailwind.config')],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './../../packages/ui/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
