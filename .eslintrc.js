module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2018,
    tsconfigRootDir: './'
  },
  env: {
    node: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 90,
        arrowParens: 'avoid',
        bracketSpacing: true
      }
    ],
    '@typescript-eslint/no-unused-vars-experimental': ["warn",  { ignoredNamesRegex: '^_' }],
    '@typescript-eslint/no-unused-vars': "off" // in favor of the one above so we can ignore vars prefixed with _
  }
};
