import { Linter } from 'eslint'
import { Options } from 'prettier'
import { GLOB_CSS, GLOB_HTML, GLOB_LESS, GLOB_SCSS } from '../globs'
import { interopDefault } from '../utils'

export type FormattersOptions = {
  /**
   * @default true
   */
  html?: boolean
  /**
   * @default true
   */
  css?: boolean
  /**
   * @default false
   */
  scss?: boolean
  /**
   * @default false
   */
  less?: boolean
}

export const commonPrettierOptions: Options = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120,
}

export const formatters = async(options: FormattersOptions = {}) => {
  const {
    html = true,
    css = true,
    scss,
    less,
  } = options

  const configs: Linter.Config[] = []

  const [
    pluginFormat,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-format')),
  ])

  if (html) {
    const htmlOptions: Options = {
      ...commonPrettierOptions,
      parser: 'html',
    }
    configs.push({
      name: 'dndxdnd/formatters-html',
      files: [GLOB_HTML],
      languageOptions: {
        parser: pluginFormat.parserPlain,
      },
      plugins: {
        format: pluginFormat,
      },
      rules: {
        'format/prettier': ['error', htmlOptions],
      },
    })
  }

  if (css) {
    const cssOptions: Options = {
      ...commonPrettierOptions,
      parser: 'css',
    }
    configs.push({
      name: 'dndxdnd/formatters-css',
      files: [GLOB_CSS],
      languageOptions: {
        parser: pluginFormat.parserPlain,
      },
      plugins: {
        format: pluginFormat,
      },
      rules: {
        'format/prettier': ['error', cssOptions],
      },
    })
  }

  if (scss) {
    const scssOptions: Options = {
      ...commonPrettierOptions,
      parser: 'scss',
    }
    configs.push({
      name: 'dndxdnd/formatters-scss',
      files: [GLOB_SCSS],
      languageOptions: {
        parser: pluginFormat.parserPlain,
      },
      plugins: {
        format: pluginFormat,
      },
      rules: {
        'format/prettier': ['error', scssOptions],
      },
    })
  }

  if (less) {
    const lessOptions: Options = {
      ...commonPrettierOptions,
      parser: 'less',
    }
    configs.push({
      name: 'dndxdnd/formatters-less',
      files: [GLOB_LESS],
      languageOptions: {
        parser: pluginFormat.parserPlain,
      },
      plugins: {
        format: pluginFormat,
      },
      rules: {
        'format/prettier': ['error', lessOptions],
      },
    })
  }

  return configs
}
