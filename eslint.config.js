import globals from "globals";
import parserTs from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import * as prettierPluginAstro from "prettier-plugin-astro";



export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },

  ...eslintPluginAstro.configs["flat/recommended"],
]