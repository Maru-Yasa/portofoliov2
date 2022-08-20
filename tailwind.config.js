module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lofi: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
        },
      },
    ],
  },
};
