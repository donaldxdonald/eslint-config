import { Linter } from 'eslint'
import { Options } from 'prettier'
import { interopDefault } from '../utils'
import { GLOB_HTML, GLOB_TS } from '../globs'
import { commonPrettierOptions } from './formatters'

export interface AngularOptions {

  /**
   * @default true
   */
  formatTemplate?: boolean
}

export const angular = async(options: AngularOptions = {}): Promise<Linter.Config[]> => {
  const [
    angularEslint,
    tsEslint,
  ] = await Promise.all([
    interopDefault(import('angular-eslint')),
    interopDefault(import('typescript-eslint')),
  ])

  const {
    formatTemplate = true,
  } = options

  const configs: Linter.Config[] = [
    ...tsEslint.config(
      {
        name: 'dndxdnd/angular',
        files: [GLOB_TS],
        extends: [
          ...angularEslint.configs.tsRecommended,
        ],
        processor: angularEslint.processInlineTemplates,
        rules: {
          '@angular-eslint/directive-selector': [
            'error',
            {
              type: 'attribute',
              prefix: 'app',
              style: 'camelCase',
            },
          ],
          '@angular-eslint/component-selector': [
            'error',
            {
              type: 'element',
              prefix: 'app',
              style: 'kebab-case',
            },
          ],
        },
      },
      {
        name: 'dndxdnd/angular-template',
        files: [GLOB_HTML],
        extends: [
          ...angularEslint.configs.templateRecommended,
        ],
      },
    ) as Linter.Config[],

  ]

  if (formatTemplate) {
    const opts: Options = {
      ...commonPrettierOptions,
      parser: 'angular',
    }
    configs.push({
      name: 'dndxdnd/formatters-angular',
      files: [GLOB_HTML],
      languageOptions: {
        parser: angularEslint.templateParser as Linter.Parser,
      },
      plugins: {
        format: await interopDefault(import('eslint-plugin-format')),
      },
      rules: {
        'format/prettier': ['error', opts],
      },
    })
  }

  return configs
}
