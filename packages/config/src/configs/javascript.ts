import { Linter } from "eslint"
import globals from "globals"
import { pluginUnusedImports } from "../plugins"

export const javascript = (): Linter.FlatConfig[] => [
  {
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
      indent: 'off',
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
      "import/order": 0,
      "no-plusplus": 0,

      'prefer-const': 'error',
      'keyword-spacing': 'error',
      'no-unused-vars': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      semi: 'off',
      'no-extra-semi': 'off',
      'func-call-spacing': 'error',
      'key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
      }],
      'arrow-parens': ['error', 'as-needed'],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'space-infix-ops': ['error', { int32Hint: false }],
      'space-before-function-paren': ['error', 'never'],
      quotes: 'off',
      'max-len': ['error', {
        code: 150,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
      }],
      'no-return-await': 'error',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-bitwise': 'off',
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'space-in-parens': ['error', 'never'],
      'switch-colon-spacing': ['error'],
      'unused-imports/no-unused-imports': ['error'],
      'unused-imports/no-unused-vars': [
        'error',
        { args: 'after-used', ignoreRestSiblings: true },
      ],
    },
  },
]