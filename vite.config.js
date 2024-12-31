import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  root: path.resolve(__dirname, "."),
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    https: true,
    port: 5173,
    host: true,
  },
});
