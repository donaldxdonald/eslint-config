import { Linter } from 'eslint'
import { GLOB_EXCLUDE } from '../globs'

export const ignores = (): Linter.Config[] => {
  return [
    {
      name: 'dndxdnd/ignores',
      ignores: GLOB_EXCLUDE,
    },
  ]
}
