import globals from "globals";
import parserTs from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.js", "**/*.mjs"],
    ignores: ["**/*.astro/*"],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": ["error", { parser: "astro" }],
    },
  },
];
