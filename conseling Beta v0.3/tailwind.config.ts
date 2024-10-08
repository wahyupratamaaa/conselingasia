/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',

        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      colors: {
        customBlue: '#4154f1',  // warna custom
        customBlueHover: '#012970',   // warna custom
        customBlueText: '#012970',
        
      },
      backgroundImage: {
        'heroBackground': "url('/Bg/backgroundImage.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
