module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_99": "#00000099",
        },
        light_green: { "200_66": "#bcfcad66" },
        gray: { 50: "#f9f9f9", 800: "#45413c", "800_01": "#4d4d4d" },
        blue_gray: { 600: "#526170", "600_7f": "#5361717f" },
        blue: { 50: "#e9f3ff", 300: "#64a4ea" },
        orange: { 50: "#fff3e3" },
        yellow: { 900: "#f27d15", "900_87": "#f27d1587" },
        green: { "300_66": "#78ea7d66" },
        light_blue: { A700: "#007aff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat", poppins: "Poppins" },
      boxShadow: { bs: "0px 4px  20px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
