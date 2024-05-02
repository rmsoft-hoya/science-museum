/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      pre: ["Pretendard"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      boxShadow: {
        card0045: "var(--boxShadow0045)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-8px)",
            "animation-timing-function": "cubic-bezier(0)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0)",
          },
        },
        "fade-in": {
          // from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
        },
        "blink-effect": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "card-border": {
          from: { boxShadow: "0px 0px 10px 10px rgba(121,180,253,0.25)" },
        },
        "slow-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
        process: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "fade-in": "fade-in 2s ease-in infinite",
        "fade-out": "fade-out 2s ease-out 2s infinite",
        bounce: "bounce 1.5s ease-out 1.5s infinite",
        process: "process 0.5s linear ease-in",
        "slow-spin": "slow-spin 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
