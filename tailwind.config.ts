import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#00214d",
        darkRed: "#d9001f",
        deepTeal: "#264653",
        lightTeal: "#325C70"
      },
    },
  },
  plugins: [],
} satisfies Config;
