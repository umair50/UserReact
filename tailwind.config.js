/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppinsBold: ["Poppins-Bold"],
      poppinsMedium: ["Poppins-Medium"],
    },
    extend: {
      // height: {
      //   '1080': '1080rem',
      // }
    },
  },
  plugins: [],
};
