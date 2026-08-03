import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          DEFAULT: "#A67C52",
          light: "#C89F74",
          dark: "#7E5B37",
          50: "#FAF6F1",
          100: "#F4ECDF",
          200: "#E6D7BE",
          300: "#D5BE9B",
          400: "#C2A379",
          500: "#A67C52",
          600: "#8C633D",
          700: "#6F4B2B",
          800: "#53361E",
          900: "#382312",
        },
        secondary: {
          DEFAULT: "#F7F5F2",
          dark: "#E8E4DD",
        },
        accent: {
          DEFAULT: "#3D3D3D",
          light: "#5A5A5A",
          dark: "#242424",
        },
        warmGrey: "#EAE7E1",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(61, 61, 61, 0.08)",
        luxury: "0 20px 40px -15px rgba(166, 124, 82, 0.15)",
        card: "0 4px 20px rgba(0, 0, 0, 0.04)",
        glow: "0 0 25px rgba(166, 124, 82, 0.3)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
