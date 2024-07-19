import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Miryang's Dev Notes",
      logo: {
        src: "./src/assets/favicon.ico",
      },
      social: {
        github: "https://github.com/MiryangJung",
      },
      customCss: ["./src/styles/custom.css"],
      pagination: false,
      attrs: { target: '_blank', style: 'font-style: italic' },
    }),
  ],
  site: "https://notes.miryang.dev",
});
