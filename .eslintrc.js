// @ts-check

/**
 * @Author likan
 * @Date 2022/8/17 17:32:45
 * @Filepath vscode-keyboard-enhance/.eslintrc.js
 */

/** @typedef {import('eslint').Linter.BaseConfig} EslintConfig */
/** @typedef {import('eslint').Linter.Config} Config */

/** @type {EslintConfig & Config} */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:unicorn/recommended',
  ],
  globals: {
    vscode: 'readonly',
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'sort-keys-fix'],
  root: true,
  rules: {},
  settings: {},
  ignorePatterns: ['*.js', 'lib'],
};
