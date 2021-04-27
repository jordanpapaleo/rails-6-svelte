module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
    '@typescript-eslint', // add the TypeScript plugin
  ],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    'import/first': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'camelcase': ['error', { ignoreDestructuring: true, properties: 'never' }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
  },
  settings: {
    'svelte3/typescript': () => require('typescript'), // pass the TypeScript package to the Svelte plugin
    // OR
    // 'svelte3/typescript': true, // load TypeScript as peer dependency
    // ...
  },
}
