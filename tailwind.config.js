/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      form: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      colors: {
        form: {
          blue: {
            alice: '#EFF5FF',
            light: '#ABBCFF',
            sky: '#BEE2FD',
          },
          denim: '#022959',
          gray: {
            lightest: '#F8F9FF',
            light: '#D6D9E6',
            normal: '#9699AA',
          },
          orange: '#FFAF7E',
          pink: '#F9818E',
          purple: '#483EFF',
          red: {
            errors: '#EE374A',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
