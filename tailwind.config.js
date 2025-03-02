module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.tsx'],
  spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
    map[index] = `${index}px`;
    return map;
  }, {}),
  theme: {
    fontSize: {
      sm: '10px',
      base: '12px',
      lg: '14px',
      xl: '16px',
      '2xl': '18px',
      '3xl': '20px',
    },
  },
  variants: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}
