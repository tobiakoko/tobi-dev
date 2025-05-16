import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended', '@typescript-eslint/recommended', 'prettier', 'eslint:recommended', 'plugin:react/recommended'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
])


/*

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: { "react/prop-types": 0 },

  settings: {
    react: {
      version: "latest",
    },
  },
};
*/