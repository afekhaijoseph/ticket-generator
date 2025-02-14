/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      green: {
        darkest: "#02191D",
        dark: "#041E23",
        DEFAULT: "#0E464F",
        light: "#08252B",
        lightest: "#f9fafc",
      },
    },
  },
};
