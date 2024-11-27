import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vite.dev/config/
export default defineConfig({
  base: "http://localhost:4173/",
  plugins: [
    react(),
    federation({
      name: "@producer",
      manifest: true,
      exposes: {
        "./test": "./src/App.tsx",
      },
      // shared: ["react", "react-dom"],
      shared: {
        react: {
          requiredVersion: "^17.0.2",
          singleton: true,
        },
        "react-dom": {
          requiredVersion: "^17.0.2",
          singleton: true,
        },
      },
    }),
    topLevelAwait(),
  ],
  build: {
    minify: false,
  },
});
