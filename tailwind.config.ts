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
        'point-purple': "#A855F7",
        'point-blue': "#3B82F6",
        'point-cyan': "#06B6D4",
        'point-pink' : "#EC4899",
        'point-rose': "#F43F5E",
        'point-orange': "#F97316",
        'background-primary': "#0f172a",
        'background-secondary': "#1e293b",
        'background-tertiary': "#334155",
        'interaction-inactive': "#94a3b8",
        'interaction-hover': "#059669",
        'interaction-pressed': "#047857",
        'interaction-focus': "#10b981",
        'border-primary': "rgba(248, 250, 252, 0.5)",
        'text-primary' : "#f8fafc",
        'text-secondary' : "#cbd5e1",
        'text-tertiary' : "#e2e8f0",
        'text-default': "#64748b",
        'text-disabled': "#94a3b8",
        'status-danger': "#dc2626",
        'icon-primary': "#64748b",
        'icon-inverse' : "#f8fafc",
        'icon-brand' : "#10b981", 
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
