import { Linter } from "eslint"
import { GLOB_VUE } from "../globs"
import { parserVue, pluginVue, tsEslint } from "../plugins"
import { tsCore } from "./typescript"

const vueCustomRules: Linter.RulesRecord = {
  'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/eqeqeq': ['error', 'smart'],
  'vue/html-self-closing': [
    'error',
    {
      html: {
        component: 'always',
        normal: 'always',
        void: 'any',
      },
      math: 'always',
      svg: 'always',
    },
  ],
  'vue/max-attributes-per-line': 'off',

  'vue/multi-word-component-names': 'off',
  'vue/no-constant-condition': 'warn',
  'vue/no-empty-pattern': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',

  'vue/no-v-html': 'off',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'vue/one-component-per-file': 'off',
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-template': 'error',
  'vue/require-default-prop': 'off',
  'vue/require-prop-types': 'off',
}

const vue3Rules: Linter.RulesRecord = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs['vue3-essential'].rules,
  ...pluginVue.configs['vue3-strongly-recommended'].rules,
  ...pluginVue.configs['vue3-recommended'].rules,
}

export const vue = (): Linter.FlatConfig[] => {
  return [
    ...tsEslint.config({
      extends: tsCore(),
      files: [GLOB_VUE],
    }) as Linter.FlatConfig[],
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          }, 
          extraFileExtensions: ['.vue'],
          parser: '@typescript-eslint/parser',
        },
      },
      plugins: {
        '@typescript-eslint': tsEslint.plugin as any,
        vue: pluginVue,
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...vue3Rules,
        ...vueCustomRules,
      },
    },
  ]
}