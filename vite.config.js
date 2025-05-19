import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import generateSitemap from "./src/utils/generateSitemap.js";
import fs from "fs";
import path from "path";

// Sitemap generation plugin
const sitemapPlugin = () => ({
  name: "sitemap-generator",
  buildStart() {
    try {
      const sitemap = generateSitemap();
      fs.writeFileSync(path.resolve(__dirname, "public/sitemap.xml"), sitemap);
      console.log("Sitemap generated successfully!");
    } catch (error) {
      console.error("Error generating sitemap:", error);
    }
  },
  handleHotUpdate({ file }) {
    // Regenerate sitemap when blog data changes
    if (file.includes("blogPosts.jsx")) {
      try {
        const sitemap = generateSitemap();
        fs.writeFileSync(
          path.resolve(__dirname, "public/sitemap.xml"),
          sitemap
        );
        console.log("Sitemap updated due to blog changes!");
      } catch (error) {
        console.error("Error updating sitemap:", error);
      }
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), sitemapPlugin()],
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
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
});
