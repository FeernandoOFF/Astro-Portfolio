/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px,0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px,-50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px,20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px,0px) scale(1)',
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F472B6',

          secondary: '#38BDF8',

          accent: '#FFBD2E',

          neutral: '#6B7280',

          'base-100': '#0B1121',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
