import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@consumer-shell",
      remotes: {
        "@producer": `producer@http://localhost:4173/mf-manifest.json`,
      },
      // shared: ["react", "react-dom"],
      shared: {
        react: {
          requiredVersion: "^17.0.2",
        },
        "react-dom": {
          requiredVersion: "^17.0.2",
        },
      },
    }),
  ],
  build: {
    minify: false,
  },
});
