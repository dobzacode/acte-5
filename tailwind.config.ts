import { nextui } from '@nextui-org/react';

const shadowColor = '0deg 0% 80%';

const primaryColor = '21, 90%,';
const secondaryColor = '109, 36% ,';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: '',
  theme: {
    screens: {
      'mobile-medium': '400px',
      'mobile-small': '320px',
      'mobile-large': '500px',
      tablet: '768px',
      laptop: '1024px',
      'laptop-large': '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      borderRadius: {
        '5xl': '8rem',
        '4xl': '6rem',
        '3xl': '4rem',
        '2xl': '3rem',
        xl: '2rem',
        lg: '1.5rem',
        md: '1rem',
        sm: '0.5rem',
        xs: '0.25rem'
      },
      fontSize: {
        '4xl': '8rem',
        '3xl': '6rem',
        '2xl': '4rem',
        xl: '3rem',
        lg: '2rem',
        md: '1.5rem',
        sm: '1rem',
        xs: '0.75rem'
      },
      lineHeight: {
        '4xl': '7.2rem',
        '3xl': '5.6rem',
        '2xl': '4.5rem',
        xl: '3rem',
        lg: '2.25rem',
        md: '1.5rem',
        sm: '1.5rem',
        xs: '1.125rem'
      },
      spacing: {
        '9xl': '20rem',
        '8xl': '16rem',
        '7xl': '12rem',
        '6xl': '10rem',
        '5xl': '8rem',
        '4xl': '6rem',
        '3xl': '4rem',
        '2xl': '3rem',
        xl: '2rem',
        lg: '1.5rem',
        md: '1rem',
        sm: '0.5rem',
        xs: '0.25rem'
      },
      transitionDuration: {
        'extra-fast': '100ms',
        fast: '200ms',
        medium: '400ms',
        slow: '600ms',
        'extra-slow': '800ms',
        slowest: '1000ms'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      themes: {
        'brand-theme': {
          extend: 'light',
          layout: {
            fontSize: {
              large: '2rem',
              medium: '1.5rem',
              small: '1rem',
              tiny: '0.75rem'
            },
            lineHeight: {
              large: '2.25rem',
              medium: '1.5rem',
              small: '1.5rem',
              tiny: '1.125rem'
            },
            radius: {
              small: '4px',
              medium: '8px',
              large: '16px'
            },
            boxShadow: {
              small: ` 0.5px 0.4px 0.6px hsl(${shadowColor} / 0.32),
              0.8px 0.6px 1px -1.6px hsl(${shadowColor} / 0.27),
              1.8px 1.3px 2.2px -3.2px hsl(${shadowColor} / 0.22);`,
              medium: `0.5px 0.4px 0.6px hsl(${shadowColor} / 0.33),
              1.3px 1px 1.7px -1.1px hsl(${shadowColor} / 0.3),
              3.5px 2.6px 4.4px -2.2px hsl(${shadowColor} / 0.26),
              8.9px 6.7px 11.3px -3.2px hsl(${shadowColor} / 0.22)`,
              large: `0.5px 0.4px 0.6px hsl(${shadowColor} / 0.31),
              1.8px 1.4px 2.3px -0.5px hsl(${shadowColor} / 0.29),
              3.3px 2.5px 4.2px -0.9px hsl(${shadowColor} / 0.27),
              5.8px 4.3px 7.3px -1.4px hsl(${shadowColor} / 0.26),
              9.7px 7.3px 12.3px -1.9px hsl(${shadowColor} / 0.24),
              15.9px 11.9px 20.1px -2.3px hsl(${shadowColor} / 0.22),
              24.8px 18.6px 31.4px -2.8px hsl(${shadowColor} / 0.2),
              37.3px 27.9px 47.2px -3.2px hsl(${shadowColor} / 0.18)`
            }
          },
          colors: {
            primary: {
              50: `hsl(${primaryColor} 95%)`,
              100: `hsl(${primaryColor} 85%)`,
              200: `hsl(${primaryColor} 75%)`,
              300: `hsl(${primaryColor} 65%)`,
              400: `hsl(${primaryColor} 55%)`,
              500: `hsl(${primaryColor} 45%)`,
              600: `hsl(${primaryColor} 35%)`,
              700: `hsl(${primaryColor} 25%)`,
              800: `hsl(${primaryColor} 15%)`,
              900: `hsl(${primaryColor} 5%)`,
              DEFAULT: `hsl(${primaryColor} 55%)`,
              foreground: `hsl(${primaryColor} 95%)`
            },
            secondary: {
              50: `hsl(${secondaryColor} 95%)`,
              100: `hsl(${secondaryColor} 85%)`,
              200: `hsl(${secondaryColor} 75%)`,
              300: `hsl(${secondaryColor} 65%)`,
              400: `hsl(${secondaryColor} 55%)`,
              500: `hsl(${secondaryColor} 45%)`,
              600: `hsl(${secondaryColor} 35%)`,
              700: `hsl(${secondaryColor} 25%)`,
              800: `hsl(${secondaryColor} 15%)`,
              900: `hsl(${secondaryColor} 5%)`,
              DEFAULT: `hsl(${secondaryColor} 55%)`,
              foreground: `hsl(${secondaryColor} 95%)`
            },
            focus: '#6d3979'
          }
        }
      }
    })
  ]
};

export default config;
