/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        gradient: {
          start: "#667eea",
          mid: "#764ba2",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-gentle": "bounceGentle 0.6s infinite",
        "pulse-slow": "pulseSlow 2s infinite",
        confetti: "confetti 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        confetti: {
          "0%": { transform: "rotate(0deg) translateX(0)", opacity: "1" },
          "50%": {
            transform: "rotate(180deg) translateX(20px)",
            opacity: "0.8",
          },
          "100%": { transform: "rotate(360deg) translateX(0)", opacity: "0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
      },
    },
  },
  plugins: [],
};
