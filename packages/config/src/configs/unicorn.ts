import { Linter } from 'eslint'
import { pluginUnicorn } from '../plugins'

export const unicorn = (): Linter.FlatConfig[] => {
  return [
    {
      name: 'dndxdnd/unicorn',
      plugins: {
        unicorn: pluginUnicorn,
      },
    },
  ]
}
