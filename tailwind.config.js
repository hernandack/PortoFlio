/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f3c614',
        secondary: '#353535',
        accent: '#353535',
        dark: '#1c1c1c',
        light: '#f3f3f3',
      },
      width: {
        'editor-sidebar': '300px',
        'editor-content': `calc(100% - 300px)`,
      },
      minHeight: {
        homepage: 'calc(100svh - 60px - 36px)',
      },
      maxHeight: {
        'editor-content': 'calc(100vh - 90px)',
      },
      gridTemplateColumns: {
        editor: 'minmax(50px,300px) minmax(300px,1fr)',
        sidebar: 'minmax(0,50px) minmax(150px,1fr)',
        '70/30': 'minmax(0,70%) minmax(0,30%)',
      },
      lineHeight: {
        par: '1',
        'min-par': '0.8',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.form-input': {
          backgroundColor: '#f3f3f3',
          color: '#353535',
          padding: '6px 10px',
          borderRadius: '0',
        },
        '.form-textarea': {
          backgroundColor: '#f3f3f3',
          color: '#353535',
          padding: '6px 10px',
          borderRadius: '0',
          minHeight: '4rem',
          resizeBy: 'none',
        },
      })
    },
  ],
}
