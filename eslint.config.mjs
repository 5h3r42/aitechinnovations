import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([".next/**", "out/**", "content/pages/**", "public/script.js"]),
  {
    files: ["scripts/check-static-site.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
]);
