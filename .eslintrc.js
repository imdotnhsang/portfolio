/**
 * * You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.
 * TODO: wait for the next version of eslint to be released to fix the issue typescript version 5.4.2 is not supported
 * TODO: migrate to eslint stylistic https://eslint.style soon
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off'
  }
};
