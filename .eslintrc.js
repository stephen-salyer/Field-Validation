module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: { jsx: true, modules: true },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["prettier", "import", "react", "jsx-a11y", "react-hooks", "jest"],
  rules: {
    "no-console": "off",
    "prettier/prettier": ["warn", { singleQuote: true, bracketSpacing: false }],
    "dot-notation": "warn",
    "quote-props": ["warn", "as-needed"],
    "arrow-body-style": ["warn", "as-needed"],
    "object-shorthand": "warn",
    "react/prop-types": "off",
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
  },
  settings: { react: { version: "detect" } },
};