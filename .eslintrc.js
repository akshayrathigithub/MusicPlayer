const NAMING_CONVENTION = {
  camelCase: 'camelCase',
  strictCamelCase: 'strictCamelCase',
  pascalCase: 'PascalCase',
  strictPascalCase: 'StrictPascalCase',
  snakeCase: 'snake_case',
  upperCase: 'UPPER_CASE',
};
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'warn',
    // '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: [NAMING_CONVENTION.camelCase],
      },
      {
        selector: 'parameter',
        format: [NAMING_CONVENTION.camelCase],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: [NAMING_CONVENTION.camelCase],
      },
      {
        selector: 'interface',
        format: [NAMING_CONVENTION.pascalCase],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'function',
        format: [NAMING_CONVENTION.pascalCase, NAMING_CONVENTION.camelCase],
      },
      {
        selector: ['variable'],
        modifiers: ['const'],
        format: [
          NAMING_CONVENTION.upperCase,
          NAMING_CONVENTION.pascalCase,
          NAMING_CONVENTION.camelCase,
        ],
      },
      {
        selector: ['enum'],
        format: [NAMING_CONVENTION.upperCase],
      },
    ],
  },
};
