import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  { ignores: ['build', '.react-router', 'node_modules'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    languageOptions: { globals: globals.browser },
    settings: { react: { version: 'detect' } },
  },
  prettier,
);
