module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Vibrant blue
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#10B981", // Emerald green
          dark: "#059669",
        },
        background: {
          light: "#FFFFFF",
          dark: "#0F172A",
          reading: "#F5F0E6", // Soft sepia
        },
        text: {
          light: "#1E293B",
          dark: "#F1F5F9",
          reading: "#5C4B37", // Warm brown
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
