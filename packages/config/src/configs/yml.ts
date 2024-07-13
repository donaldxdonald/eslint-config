import { Linter } from "eslint"
import { GLOB_YAML } from "../globs"
import { parserYaml, pluginYml } from "../plugins"

export const yml = (): Linter.FlatConfig[] => {
  return [
    ...pluginYml.configs["flat/recommended"],
    {
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
