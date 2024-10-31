import { Linter } from 'eslint'
import { FormattersOptions } from '../configs/formatters'
import { AngularOptions } from '../configs/angular'

export type OptionsWithOverrides = {
  overrides?: Linter.Config['rules']
}

export type Options = {
  vue?: boolean
  markdown?: boolean
  typescript?: boolean
  react?: boolean | OptionsWithOverrides
  style?: boolean
  /**
   * @default false
   */
  angular?: boolean | AngularOptions

  /**
   * @default true
   */
  formatters?: boolean | FormattersOptions
}
