module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success:               '#288528',
        darkColor:             '#0d1117',
        textColor:             '#58a6ff',
        borderColor:           '#dbdbdb',
        borderActive:          '#F78166',
        headerTextColor:       'rgba(240,246,252,0.7)',
        borderColorHover:      '#8b949e',
        buttonBackground:      '#21262d',
        borderColorDark:       '#222',
        borderColorLight:      '#30363d',
        headerBackground:      '#F78166',
        textColorEmphasis:     '#1f6feb',
        buttonBackgroundHover: '#30363d',
      },
      screens: {
        'laptop': '1011px',
      },
    },
  },
  plugins: [],
}
