import { Linter } from 'eslint'

export type OptionsWithOverrides = {
  overrides?: Linter.Config['rules']
}

export type Options = {
  vue?: boolean
  markdown?: boolean
  typescript?: boolean
  react?: boolean | OptionsWithOverrides
  style?: boolean
  angular?: boolean
}
