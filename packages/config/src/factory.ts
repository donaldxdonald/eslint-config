import { Linter } from "eslint"
import { isPackageExists } from "local-pkg"
import { comments, ignores, imports, javascript, jsonc, markdown, node, react, regexp, typescript, unicorn, vue, yml } from "./configs"
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
  ...regexp(),
]

export const dndxdnd = async(extraConfigs: Linter.FlatConfig[] = [], options?: Options): Promise<Linter.FlatConfig[]> => {
  const {
    vue: enableVue = isPackageExists('vue'),
    markdown: enableMarkdown,
    typescript: enableTypescript = true,
    react: enableReact = isPackageExists('react'),
  } = options || {}

  const configs: Linter.FlatConfig[] = []

  configs.push(...presetBasic)

  if (enableVue) {
    configs.push(...await vue())
  }

  if (enableReact) {
    const opts = enableReact === true ? {} : enableReact
    configs.push(...await react(opts))
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