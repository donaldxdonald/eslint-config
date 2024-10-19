import { Linter } from 'eslint'
import { configs } from 'eslint-plugin-regexp'

export const regexp = (): Linter.Config[] => {
  return [
    configs['flat/recommended'],
  ]
}
