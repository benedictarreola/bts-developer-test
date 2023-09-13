/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': {
          lightest: '#918ED6',
          light: '#5B56C2',
          medium: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: '#1B1682',
          darkest: '#120F57'
        },
        'secondary': {
          lightest: '#E9A195',
          light: '#DF7260',
          medium: '#D4432B',
          dark: '#9F3220',
          darkest: '#6A2115'
        },
        tertiary: {
          lightest: '#F2E9D9',
          light: '#EAD2B0',
          medium: '#E1BB87',
          dark: '#B38C5A',
          darkest: '#84622D'
        },
        'status': {
          error: '#FF2400',
          warning: '#FFCE2D',
          success: '#4E8B43'
        },
        'contrast': {
          lightest: '#FFFFFF',
          light: '#E5E5E5',
          medium: '#B3B3B3',
          dark: '#747473',
          darkest: '#000000'
        }
      },
      padding: {
        'full': '100%',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Times New Roman', 'serif'],
      heading: ['Roboto Mono', 'monospace'],
      body: ['Montserrat', 'Arial', 'serif']
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [], 
  content: [
    path.resolve(__dirname, '**/*.js'),
    path.resolve(__dirname, '../**/*.liquid')
  ]
}