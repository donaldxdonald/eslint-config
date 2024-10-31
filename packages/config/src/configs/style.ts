import { Linter } from 'eslint'
import pluginStylistic from '@stylistic/eslint-plugin'
import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX, GLOB_VUE } from '../globs'

export const style = (): Linter.Config[] => {
  const files = [
    GLOB_JS,
    GLOB_JSX,
    GLOB_TS,
    GLOB_TSX,
    GLOB_VUE,
  ]

  const config = pluginStylistic.configs.customize({
    semi: false,
    quotes: 'single',
    indent: 2,
    commaDangle: 'always-multiline',
  })

  return [
    {
      name: 'dndxdnd/style',
      files,
      plugins: {
        '@stylistic': pluginStylistic,
      },
      rules: {
        ...config.rules,
        '@stylistic/semi': [
          'error',
          'never',
        ],
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/comma-spacing': ['error', {
          before: false,
          after: true,
        }],
        '@stylistic/func-call-spacing': 'error',
        '@stylistic/indent': ['error', 2],
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
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/space-before-function-paren': ['error', 'never'],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
        '@stylistic/switch-colon-spacing': 'error',
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
