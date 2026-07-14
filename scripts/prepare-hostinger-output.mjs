import { copyFile, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "out");

await copyFile(path.join(root, "public", ".htaccess"), path.join(output, ".htaccess"));

const sitemapPath = path.join(output, "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
if ((sitemap.match(/<loc>/g) || []).length !== 22) {
  throw new Error("Hostinger output sitemap must contain 22 URLs.");
}

console.log("Prepared static Hostinger output in out/.");
