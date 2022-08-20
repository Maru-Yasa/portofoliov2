module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
        fantasy: {
          ...require("daisyui/src/colors/themes")["[data-theme=fantasy]"],
        },
        black: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
        },
        lofi: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
        },
      },
    ],
  },
};
