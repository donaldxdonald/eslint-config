import { Linter } from "eslint"
import { GLOB_JS, GLOB_TS, GLOB_TSX } from "../globs"
import { tsEslint } from "../plugins"

export const tsCore = () => {
  return tsEslint.config({
    extends: [...tsEslint.configs.recommended],
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/ban-types': [
        'error',
        {
          extendDefaults: true,
          types: {
            '{}': false,
          },
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
      "@typescript-eslint/no-empty-interface": [
        "warn",
        {
          allowSingleExtends: true,
        },
      ],
    },
  }) as Linter.FlatConfig[]
}

export const typescript = (): Linter.FlatConfig[] => {
  const configs: Linter.FlatConfig[] = [...tsCore()]

  configs.push(
    {
      files: [GLOB_JS, '**/*.cjs'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  )

  return configs
}
