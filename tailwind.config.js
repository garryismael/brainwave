/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "deep-black": "#0e0c15",
        midnight: "#15131d",
        "dark-purple": "#252134",
        "dark-violet": "#2E2A41",
        "dark-indigo": "#3f3a52",
        "dark-grayish-purple": "#757185",
        "lavender-gray": "#ada8c3",
        "light-lavender": "#cac6dd",
        "sunshine-yellow": "#ffc876",
        coral: "#ff776f",
        "mint-green": "#7adb78",
        periwinkle: "#858dff",
        "pink-blossom": "#ff98e2",
        violet: "#ac6aff",
        "dark-grady": "#26242C",
        "dark-white": "#6C7275"
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
      backgroundImage: {
        "gradient-top": "linear-gradient( to right, #89F9E8 36%, #9299FC 63%)",
        "gradient-bottom": "linear-gradient( to right, #FACB7C 13%, #D77DEE 88%)",
      },
    },
  },
  plugins: [],
};
