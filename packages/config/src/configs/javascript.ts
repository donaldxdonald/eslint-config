import { Linter } from 'eslint'
import globals from 'globals'
import { pluginUnusedImports } from '../plugins'

export const javascript = (): Linter.Config[] => [
  {
    name: 'dndxdnd/javascript',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'guard-for-in': 'off',
      'no-underscore-dangle': 'off',
      'no-shadow': 'off',
      'prefer-arrow/prefer-arrow-functions': [
        'off',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'import/order': 0,
      'no-plusplus': 0,

      'prefer-const': 'error',
      'no-unused-vars': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-bitwise': 'off',
      'unused-imports/no-unused-imports': ['error'],
      'unused-imports/no-unused-vars': [
        'error',
        { args: 'after-used', ignoreRestSiblings: true },
      ],
    },
  },
]
