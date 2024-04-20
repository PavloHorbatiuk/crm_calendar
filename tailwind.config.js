/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sl: '320px',
        ss: '360px',
        ml: '428px',
        ms: '480px',
        mm: '576px',
        sm: '680px',
        md: '768px',
        lm: '992px',
        lg: '1024px',
        xl: '1280px',
        '1xl': '1366px',
        '3xl': '1760px',
        '4xl': '1920px',
        '5xl': '2560px',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        Karla: ['Karla', 'sans-serif'],
      },
      colors: {
        primary: '#3F8CFF',
        lightBlue: '#C9D6FF',
        blueMoon: '#EBF1FC',
        primaryDark: '#6450E0',
        purple: '#F6F0FF',
        secondaryDark: '#231F20',
        gray: '#7D8592',
        black: '#231F20',
        lightBlack: '#2b2a2a',
        lightGray: '#D8E0F0',
        gainsboro: '#DDDDDD',
        rose: '#E35F5E',
        green: '#5BB984',
        whitePrimary: '#ffffff',
      },
    },
    fontSize: {
      mm: ['0.875rem', '1.25rem'], // (size:14px line-height:20px)
      sm: ['0.9375rem', '1.5rem'], // (size:15px line-height:24px)
      ml: ['1rem', '1.5rem'], // (size:16px line-height:24px)
      md: ['1.125rem', '1.6875rem'], // (size:18px line-height:27px)
      xl: ['1.5rem', '2.25rem'], // (size:24px line-height:36px)
      '1xl': ['2.5rem', '3.75rem'], // (size:40px line-height:60px)
      '2xl': ['2rem', '3rem'], // (size:32px line-height:48px)
      '3xl': ['1.5rem', '2.25rem'], // (size:24px line-height:36px)
      '4xl': ['1.125rem', '1.688rem'], // (size:18px line-height:27px)
      '5xl': ['2rem', '3rem'], // (size:32px line-height:48px)
      '6xl': ['1.1rem', '1.6rem'], // (size:17px line-height:25px)
    },
  },

  plugins: [],
};
