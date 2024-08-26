/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',"./index.html",
      'node_modules/preline/dist/*.js',
  ],
    theme: {
    extend: {},
  },
  plugins: [
      require('preline/plugin'),
  ],
}

