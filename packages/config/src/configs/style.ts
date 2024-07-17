import { Linter } from "eslint"
import pluginStylistic from '@stylistic/eslint-plugin'

export const style = (): Linter.FlatConfig[] => {
  return [
    pluginStylistic.configs["recommended-flat"],
    {
      name: 'dndxdnd/style',
      plugins: {
        "@stylistic": pluginStylistic,
      },
      rules: {
        "@stylistic/semi": [
          "error",
          "never",
        ],
        "@stylistic/no-extra-semi": "error",
        "@stylistic/array-bracket-spacing": ["error", "never"],
        "@stylistic/arrow-parens": ["error", "as-needed"],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/comma-spacing': ['error', {
          before: false,
          after: true,
        }],
        '@stylistic/func-call-spacing': 'error',
        "@stylistic/indent": ['error', 2],
        '@stylistic/key-spacing': ['error', {
          beforeColon: false,
          afterColon: true,
        }],
        '@stylistic/keyword-spacing': 'error',
        '@stylistic/max-len': ['error', {
          code: 150,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        }],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/quotes': ["error", 'single'],
        '@stylistic/space-before-function-paren': ['error', 'never'],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
        '@stylistic/switch-colon-spacing': "error",
        '@stylistic/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        '@stylistic/type-annotation-spacing': ['error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
      },
    },
  ]
}
