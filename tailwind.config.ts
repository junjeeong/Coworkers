import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-primary': "#10B981",
        'brand-secondary': "#34D399",
        'brand-tertiary': "#A3E635",
        'brand-gradient': 'linear-gradient(to right, #10B981, #A3E635)',
      },
      fontSize: {
        xs: ['12px', { lineHeight: '14px' }],
        sm: ['13px', { lineHeight: '16px' }],
        md: ['14px', { lineHeight: '17px' }],
        lg: ['16px', { lineHeight: '19px' }],
        xl: ['20px', { lineHeight: '24px' }],
        '2lg': ['18px', { lineHeight: '21px' }],
        '2xl': ['24px', { lineHeight: '28px' }],
        '3xl': ['32px', { lineHeight: '38px' }],
        '4xl': ['40px', { lineHeight: '48px' }],
      }
    },
  },
  plugins: [],
} satisfies Config;
