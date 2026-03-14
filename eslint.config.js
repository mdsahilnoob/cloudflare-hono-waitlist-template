import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro", "*.ts", "*.tsx"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    rules: {
    }
  }
];