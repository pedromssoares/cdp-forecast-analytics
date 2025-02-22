import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B4D8",
        background: "#D1D5DB", // 🔆 Fundo claro para modo normal
        text: "#1F2937", // 🔆 Texto escuro para melhor legibilidade no fundo claro
        darkBackground: "#111827", // 🌙 Fundo mais escuro no modo dark
        darkText: "#D1D5DB", // 🌙 Texto claro para o modo escuro
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
} satisfies Config;
