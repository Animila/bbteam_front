/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Gotham Pro', 'sans-serif'],
      'sans-bold': ['Gotham Pro Bold', 'sans-serif'],
      sansmedium: ['Gotham Pro Medium', 'sans-serif'],
      'sans-black': ['Gotham Pro Black', 'sans-serif'],
    },
    colors: {
      main_action: '#2EC4B6',
      number_list: '#888888',
      main_bg: '#16151D',
      main_content: '#222222',
      border_block: '#312F40',
      line_list: '#383838',
      filter: '#333333',
      color_genre: '#888785',
      white: '#fff',
      black: '#000',
      textSpecial: '#555555',
      transparent: 'transparent',
      spanManga: '#1B1B1B',
      textFilterTitle: '#D9D9D9',
      btnDelete: '#E53427',
      filterBg: '#171717',
      bgInput: '#151515',
      placeholderInput: '#C3C3C3',
      bgForm: '#0D0D0D',
      textForm: '#4F4F4F',

      settingInput: '#181818',
    },
  },
  plugins: [],
};
