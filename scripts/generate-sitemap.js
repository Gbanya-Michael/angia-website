import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import generateSitemap from "../src/utils/generateSitemap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate sitemap
const sitemap = generateSitemap();

// Write to public directory
fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);

console.log("Sitemap generated successfully!");
