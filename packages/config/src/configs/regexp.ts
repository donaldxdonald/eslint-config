import { Linter } from "eslint"
import { configs } from 'eslint-plugin-regexp'

export const regexp = (): Linter.FlatConfig[] => {
  return [
    configs["flat/recommended"],
  ]
}
