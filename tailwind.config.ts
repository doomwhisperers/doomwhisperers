import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'doom': {
          black: '#0A0A0C',
          purple: '#6B2FB3',
          navy: '#1A1F2C',
          silver: '#C0C0C0',
          'neon-purple': '#B829F7',
          'neon-pink': '#FF59F7',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'rocker': ['New Rocker', 'cursive'],
        'fell': ['IM Fell English SC', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
      },
      keyframes: {
        'glow': {
          '0%, 100%': { 
            textShadow: '0 0 10px #B829F7, 0 0 20px #B829F7, 0 0 30px #B829F7'
          },
          '50%': {
            textShadow: '0 0 20px #FF59F7, 0 0 30px #FF59F7, 0 0 40px #FF59F7'
          },
        },
        'button-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #B829F7, 0 0 10px #B829F7'
          },
          '50%': {
            boxShadow: '0 0 10px #FF59F7, 0 0 20px #FF59F7'
          },
        }
      },
      animation: {
        'text-glow': 'glow 3s ease-in-out infinite',
        'button-glow': 'button-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
