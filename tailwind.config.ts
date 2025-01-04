import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D47A1',  // Deep Blue - Professional, Trustworthy
          dark: '#062255',     // Darker shade for interactions
          light: '#1565C0'     // Lighter shade for highlights
        },
        secondary: {
          DEFAULT: '#2196F3',  // Bright Blue - Modern, Innovative
          dark: '#1976D2',
          light: '#64B5F6'
        },
        accent: {
          DEFAULT: '#4CAF50',  // Green - Health, Growth
          dark: '#388E3C',
          light: '#81C784'
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFEC8B',
          dark: '#DAA520',
          deepest: '#B8860B'
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#9E9E9E'
        },
        medical: {
          background: '#F0F4F8',  // Soft, clean medical background
          text: '#2C3E50'         // Professional text color
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'medical-card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'hover-elevation': '0 8px 15px rgba(0, 0, 0, 0.15)'
      },
      borderRadius: {
        'medical': '12px'  // Softer, modern rounded corners
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2C3E50',
            a: {
              color: '#0D47A1',
              '&:hover': {
                color: '#1565C0'
              }
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const textUtilities = {
        '.text-wrap-balance': {
          'text-wrap': 'balance'
        },
        '.text-wrap-pretty': {
          'text-wrap': 'pretty'
        },
        '.text-clamp-2': {
          'display': '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden'
        },
        '.text-clamp-3': {
          'display': '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden'
        },
        '.break-words-safe': {
          'overflow-wrap': 'break-word',
          'word-wrap': 'break-word',
          'word-break': 'break-word',
          'hyphens': 'auto'
        }
      }
      
      addUtilities(textUtilities, ['responsive'])
    })
  ],
}

export default config