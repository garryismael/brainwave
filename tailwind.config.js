/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-charcoal": "#26242c",
        "deep-purple": "#0e0c15",
        midnight: "#15131d",
        "shadow-purple": "#252134",
        "slate-gray": "#3f3a52",
        "dusty-purple": "#757185",
        "lavender-gray": "#ada8c3",
        "light-lavender": "#cac6dd",
        white: "#ffffff",
        "deep-night": "#0e0c15",
        "pink-blossom": "#ff98e2",
        periwinkle: "#858dff",
        "mint-green": "#7adb78",
        coral: "#ff776f",
        "sunshine-yellow": "#ffc876",
        violet: "#ac6aff",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif", "system-ui"],
        sourceCodePro: ["Source Code Pro", "sans-serif", "system-ui"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "body-1": ["20px", { lineHeight: "32px", fontWeight: "400" }],
        "body-2": ["14px", { lineHeight: "24px", fontWeight: "300" }],
        caption: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        tagLine: [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "400",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          },
        ],
        quote: ["18px", { lineHeight: "27px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
