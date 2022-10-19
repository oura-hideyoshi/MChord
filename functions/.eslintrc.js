module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*" // Ignore built files.
  ],
  plugins: [
    "unused-imports",
    "@typescript-eslint",
    "import"
  ],
  rules: {
    "no-unused-vars": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-labels": "error",
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "never",
      "functions": "never",
    }],
    "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
    "semi-spacing": ["error", {"after": true, "before": false}],
    "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "warn",
    "constructor-super": "error",
    "eqeqeq": [
      "warn",
      "always"
    ],
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-unassigned-import": "warn",
    "no-cond-assign": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true,
      }
    ],
    "no-invalid-this": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-redeclare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unsafe-finally": "error",
    "no-var": "warn",
    "no-void": "error",
    "prefer-const": "warn",
  },
}
