import { Linter } from 'eslint'
import pluginImport from 'eslint-plugin-import-x'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT, GLOB_TS, GLOB_TSX } from '../globs'

export const imports = (): Linter.Config[] => {
  return [
    pluginImport.flatConfigs.typescript as Linter.Config,
    {
      name: 'dndxdnd/import',
      plugins: {
        import: pluginImport as any,
      },
      rules: {
        'import/first': 'error',
        'import/no-default-export': 'off',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            pathGroups: [{ group: 'internal', pattern: '{{@,~}/,#}**' }],
            pathGroupsExcludedImportTypes: ['type'],
          },
        ],
      },
    },
    {
      files: [GLOB_TS, GLOB_TSX],
      settings: {
        'import/resolver-next': [
          createTypeScriptImportResolver({
            project: '**/tsconfig.json',
            alwaysTryTypes: true,
          }),
        ],
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SRC_EXT}`,
        `**/{views,pages,routes,middleware,plugins,api}/${GLOB_SRC}`,
        '**/{index,vite,esbuild,rollup,rolldown,webpack,rspack}.ts',
        '**/*.d.ts',
        `${GLOB_MARKDOWN}/**`,
        '**/.prettierrc*',
      ],
      plugins: {
        import: pluginImport as any,
      },
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
}
