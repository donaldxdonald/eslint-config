import { Linter } from 'eslint'
import { pluginUnicorn } from '../plugins'

export const unicorn = (): Linter.Config[] => {
  return [
    {
      name: 'dndxdnd/unicorn',
      plugins: {
        unicorn: pluginUnicorn,
      },
    },
  ]
}
