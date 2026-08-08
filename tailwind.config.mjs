/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Paleta ingeniería: navy profundo + cian técnico + acento ámbar
        brand: {
          50: '#eef6fb',
          100: '#d5e8f4',
          200: '#aecfe6',
          300: '#7db0d4',
          400: '#458cbe',
          500: '#1f6fa5',
          600: '#155888',
          700: '#12466c',
          800: '#0f3a58',
          900: '#0c2c43',
        },
        accent: {
          DEFAULT: '#f0a020',
          dark: '#c47e0f',
        },
        ink: '#0c2434',
        mute: '#5a6b78',
        line: '#e2e8ee',
        surface: '#f6f9fb',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(12,44,67,0.06), 0 8px 24px rgba(12,44,67,0.06)',
        lift: '0 10px 40px rgba(12,44,67,0.12)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
