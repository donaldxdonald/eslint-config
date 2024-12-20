import { Linter } from 'eslint'
import { GLOB_YAML } from '../globs'
import { parserYaml, pluginYml } from '../plugins'

export const yml = (): Linter.Config[] => {
  return [
    ...pluginYml.configs['flat/recommended'],
    {
      name: 'dndxdnd/yml',
      files: [GLOB_YAML],
      languageOptions: {
        parser: parserYaml,
      },
      plugins: {
        yml: pluginYml as any,
      },
      rules: {
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ]
}
