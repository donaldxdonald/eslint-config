import { Linter } from "eslint"
import { GLOB_EXCLUDE } from "../globs"

export const ignores = (): Linter.FlatConfig[] => {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}