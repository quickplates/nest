module.exports = {
  env: {
    // Set ES2022 environment
    es2022: true,

    // Running in Node environment
    node: true,
  },

  extends: [
    // Use recommended rules from ESLint
    "eslint:recommended",

    // Use recommended rules for TypeScript
    "plugin:@typescript-eslint/recommended",

    // Turn off rules that might conflict with Prettier
    "prettier",
  ],

  // Don't ignore config files
  ignorePatterns: ["!.*"],

  overrides: [
    // Use Node.js environment for CommonJS files
    {
      files: ["**/*.cjs"],
      env: {
        node: true,
      },
    },
  ],

  // Use TypeScript parser
  parser: "@typescript-eslint/parser",

  parserOptions: {
    // Allow ES2022 syntax
    sourceType: "module",
  },

  plugins: [
    // Use TypeScript plugin
    "@typescript-eslint",
  ],

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  rules: {
    // Allow empty destructuring patterns
    "no-empty-pattern": "off",
  },
};
