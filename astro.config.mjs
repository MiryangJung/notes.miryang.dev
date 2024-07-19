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
    }),
  ],
  site: "https://notes.miryang.dev",
});
