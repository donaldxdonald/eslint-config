import { Linter } from "eslint"
import { pluginUnicorn } from "../plugins"

export const unicorn = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
    },
  ]
}
