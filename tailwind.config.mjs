/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Aquí puedes añadir personalizaciones si las necesitas después
    },
  },
  plugins: [
    // Este es el motor que hará que el Markdown se vea bien
    require("@tailwindcss/typography"),
  ],
};
