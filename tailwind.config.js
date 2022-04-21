// tailwind.config.js
module.exports = {
  
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  theme: {
  screens: {
    '2xl': { 'max': "1536px" },
    xl: { 'max': "1280px" },
    "1100": { "max": "1100px" },
    xll: { "max": "1080px" },
    lg: { 'max': "1024px" },
    "mmd": { 'max': "992px"},
    "mdd": { "max": "830px" },
    md: { 'max': "768px" },
    sm: { 'max': "640px" },
    smm: { 'max' : '576px' },
    xss : { "max" : "532px" },
    xs: { 'max': "475px" },
    "2xs": { 'max': "375px" },
  },}

}