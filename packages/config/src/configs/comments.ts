import { pluginComments } from '../plugins'
import type { Linter } from 'eslint'

export const comments = (): Linter.Config[] => [
  {
    name: 'dndxdnd/comments',
    plugins: {
      'eslint-comments': pluginComments,
    },
    rules: {
      ...pluginComments.configs.recommended.rules,
    },
  },
]
