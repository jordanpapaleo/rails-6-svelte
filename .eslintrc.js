module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  extends: ['standard'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
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
}
