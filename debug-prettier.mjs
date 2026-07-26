// Script de diagnóstico: reproduce EXACTAMENTE lo que hace eslint-plugin-prettier
// al intentar formatear un archivo .astro, pero mostrando el error completo
// (stack trace incluido) en vez del resumen de una sola línea que da ESLint.
//
// Correr desde la raíz del proyecto con:
//   pnpm exec node debug-prettier.mjs

import prettier from "prettier";
import * as prettierPluginAstro from "prettier-plugin-astro";
import fs from "fs";

const filePath = "src/components/home/Speakers.astro";
const code = fs.readFileSync(filePath, "utf8");

console.log("Versión de Prettier:", prettier.version);
console.log("Ruta del módulo prettier:", import.meta.resolve("prettier"));
console.log(
  "Ruta del módulo prettier-plugin-astro:",
  import.meta.resolve("prettier-plugin-astro"),
);
console.log("---");

try {
  const result = await prettier.format(code, {
    parser: "astro",
    plugins: [prettierPluginAstro],
  });
  console.log("OK: formateó sin problema. Primeras líneas del resultado:");
  console.log(result.split("\n").slice(0, 8).join("\n"));
} catch (err) {
  console.log("ERROR COMPLETO:");
  console.log(err.stack || err.message);
}