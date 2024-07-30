import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.2s ease-in-out',
        'slide-out': 'slide-out 0.2s ease-in-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': {transform: 'translateY(8px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        'slide-out': {
          '0%': {transform: 'translateY(0)', opacity: '1'},
          '100%': {transform: 'translateY(8px)', opacity: '0'},
        },
      },
    },
  },
};

export default config;
