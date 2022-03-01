module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkColor:         '#0d1117',
        textColor:         '#58a6ff',
        borderColor:       '#30363d',
        borderActive:      '#F78166',
        headerTextColor:   'rgba(240,246,252,0.7)',
        headerBackground:  '#F78166',
        textColorEmphasis: '#1f6feb',
      },
      screens: {
        'laptop': '1011px',
      },
    },
  },
  plugins: [],
}
