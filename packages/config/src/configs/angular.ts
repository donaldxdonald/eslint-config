import { Linter } from 'eslint'
import { tsEslint } from '../plugins'
import { interopDefault } from '../utils'
import { GLOB_HTML, GLOB_TS } from '../globs'

export const angular = async(): Promise<Linter.Config[]> => {
  const [
    angularEslint,
  ] = await Promise.all([
    interopDefault(import('angular-eslint')),
  ])

  return tsEslint.config(
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
  ) as Linter.Config[]
}
