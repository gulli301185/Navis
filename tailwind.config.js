/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1140px",
          // "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};

// / @type {import('tailwindcss').Config} */;
// export default {
//   content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       container: {
//         screens: {
//           sm: "600px",
//           md: "728px",
//           lg: "984px",
//           xl: "1140px",
//           "2xl": "1140px",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
