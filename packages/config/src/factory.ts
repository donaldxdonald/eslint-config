import { Linter } from 'eslint'
import { isPackageExists } from 'local-pkg'
import { comments, ignores, imports, javascript, jsonc, markdown, node, react, regexp, style, typescript, unicorn, vue, yml } from './configs'
import { Options } from './types/options'
import { angular } from './configs/angular'

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

export const dndxdnd = async(extraConfigs: Linter.Config[] = [], options?: Options): Promise<Linter.Config[]> => {
  const {
    vue: enableVue = isPackageExists('vue'),
    markdown: enableMarkdown,
    typescript: enableTypescript = true,
    react: enableReact = isPackageExists('react'),
    style: enableStyle = true,
    angular: enableAngular = false,
  } = options || {}

  const configs: Linter.Config[] = []

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

  if (enableStyle) {
    configs.push(...style())
  }

  if (enableAngular) {
    configs.push(...await angular())
  }

  configs.push(...extraConfigs)

  return configs
}
