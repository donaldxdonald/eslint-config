import { Linter } from "eslint"
import { isPackageExists } from "local-pkg"
import { comments, ignores, imports, javascript, jsonc, markdown, node, typescript, unicorn, vue, yml } from "./configs"
import { Options } from "./types/options"

export const presetBasic = [
  ...javascript(),
  ...yml(),
  ...imports(),
  ...unicorn(),
  ...jsonc(),
  ...node(),
  ...comments(),
  ...ignores(),
]

export const dndxdnd = (extraConfigs: Linter.FlatConfig[] = [], options?: Options): Linter.FlatConfig[] => {
  const {
    vue: enableVue = isPackageExists('vue'),
    markdown: enableMarkdown,
    typescript: enableTypescript = true,
  } = options || {}

  const configs: Linter.FlatConfig[] = []

  configs.push(...presetBasic)

  if (enableVue) {
    configs.push(...vue())
  }

  if (enableTypescript) {
    configs.push(...typescript())
  }

  if (enableMarkdown) {
    configs.push(...markdown())
  }

  configs.push(...extraConfigs)

  return configs
}