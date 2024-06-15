import { Linter } from "eslint"

export type OptionsWithOverrides = {
  overrides?: Linter.FlatConfig['rules']
}

export type Options = {
  vue?: boolean
  markdown?: boolean
  typescript?: boolean
  react?: boolean | OptionsWithOverrides
}