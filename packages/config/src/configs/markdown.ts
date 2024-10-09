import { Linter } from 'eslint'
import { GLOB_MARKDOWN } from '../globs'
import { pluginMarkdown } from '../plugins'

export const markdown = (): Linter.FlatConfig[] => {
  return [
    ...pluginMarkdown.configs.recommended,
    {
      name: 'dndxdnd/markdown',
      files: [GLOB_MARKDOWN],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ]
}
