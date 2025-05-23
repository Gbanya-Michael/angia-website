import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import generateSitemap from "./src/utils/generateSitemap.js";
import fs from "fs";
import path from "path";

// Sitemap generation plugin - only run in production
const sitemapPlugin = () => ({
  name: "sitemap-generator",
  buildStart() {
    if (process.env.NODE_ENV === "production") {
      try {
        const sitemap = generateSitemap();
        fs.writeFileSync(
          path.resolve(__dirname, "public/sitemap.xml"),
          sitemap
        );
        console.log("Sitemap generated successfully!");
      } catch (error) {
        console.error("Error generating sitemap:", error);
      }
    }
  },
  handleHotUpdate({ file }) {
    // Only regenerate sitemap in production
    if (
      process.env.NODE_ENV === "production" &&
      file.includes("blogPosts.jsx")
    ) {
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
  plugins: [
    react(),
    // Only use SSL in development if needed
    process.env.NODE_ENV === "development" ? basicSsl() : null,
    sitemapPlugin(),
  ].filter(Boolean),
  root: path.resolve(__dirname, "."),
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    // Add build optimizations
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    https: process.env.NODE_ENV === "development",
    port: 5173,
    host: true,
    // Add HMR optimizations
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@fortawesome": path.resolve(__dirname, "node_modules/@fortawesome"),
    },
  },
  // Add optimization options
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@fortawesome/fontawesome-free/css/all.css";`,
      },
    },
  },
});
