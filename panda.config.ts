import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          neutral: {
            0: { value: '#FFFFFF' },
            50: { value: '#F5F7FA' },
            100: { value: '#F3F5F8' },
            200: { value: '#E0E4EA' },
            300: { value: '#CACFDB' },
            400: { value: '#99A0AE' },
            500: { value: '#717784' },
            600: { value: '#525866' },
            700: { value: '#2B303B' },
            800: { value: '#232530' },
            900: { value: '#191B25' },
            950: { value: '#0E121B' },
          },
          blue: {
            700: { value: '#2547D0' },
            500: { value: '#335CFF' },
            50: { value: '#EBF1FF' },
          },
          green: {
            500: { value: '#21C16B' },
            100: { value: '#D1FBE9' },
          },
          red: {
            500: { value: '#FB3748' },
            100: { value: '#FFD5D8' },
          },
        },
        fonts: {
          sans: { value: 'Inter, sans-serif' },
          serif: { value: 'Inter, serif' },
          mono: { value: 'Menlo, monospace' },
        },
        fontSizes: {
          xs: { value: '12px' },
          sm: { value: '14px' },
          md: { value: '16px' },
          lg: { value: '20px' },
          xl: { value: '24px' },
        },
        lineHeights: {
          snug: { value: '120%' },
        },
        letterSpacings: {
          tight: { value: '-0.2px' },
          tighter: { value: '-0.3px' },
          tightest: { value: '-0.5px' },
        },
        spacing: {
          0: { value: '0px' },
          25: { value: '2px' },
          50: { value: '4px' },
          75: { value: '6px' },
          100: { value: '8px' },
          150: { value: '12px' },
          200: { value: '16px' },
          250: { value: '20px' },
          300: { value: '24px' },
          400: { value: '32px' },
          500: { value: '40px' },
          600: { value: '48px' },
          800: { value: '64px' },
          1000: { value: '80px' },
        },
        radii: {
          0: { value: '0px' },
          4: { value: '4px' },
          6: { value: '6px' },
          8: { value: '8px' },
          10: { value: '10px' },
          12: { value: '12px' },
          16: { value: '16px' },
          20: { value: '20px' },
          24: { value: '24px' },
          full: { value: '999px' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
