import { Linter } from 'eslint'
import { isPackageExists } from 'local-pkg'
import { ensurePackages, interopDefault } from '../utils'
import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'
import { OptionsWithOverrides } from '../types/options'

const NextJsPackages = ['next']
const ReactRefreshAllowConstantExportPackages = ['vite']

export const react = async(options?: OptionsWithOverrides): Promise<Linter.Config[]> => {
  const {
    overrides = {},
  } = options || {}

  await ensurePackages([
    '@eslint-react/eslint-plugin',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-refresh',
  ])

  const [
    pluginReact,
    pluginReactHooks,
    pluginReactRefresh,
    pluginTs,
  ] = await Promise.all([
    interopDefault(import('@eslint-react/eslint-plugin')),
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('eslint-plugin-react-refresh')),
    interopDefault(import('typescript-eslint')),
  ] as const)

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(i => isPackageExists(i))
  const isUsingNext = NextJsPackages.some(i => isPackageExists(i))

  const plugins = (pluginReact.configs.all as any).plugins

  return [
    {
      name: 'dndxdnd/react/setup',
      plugins: {
        'react': plugins['@eslint-react'] as any,
        'react-dom': plugins['@eslint-react/dom'] as any,
        'react-hooks': pluginReactHooks as any,
        'react-hooks-extra': plugins['@eslint-react/hooks-extra'] as any,
        'react-naming-convention': plugins['@eslint-react/naming-convention'] as any,
        'react-refresh': pluginReactRefresh,
      },
    },
    {
      name: 'dndxdnd/react',
      files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: pluginTs.parser as any,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          sourceType: 'module',
        },
      },
      rules: {

        // recommended rules from eslint-plugin-react-dom https://eslint-react.xyz/docs/rules/overview#dom-rules
        'react-dom/no-dangerously-set-innerhtml': 'warn',
        'react-dom/no-dangerously-set-innerhtml-with-children': 'error',
        'react-dom/no-find-dom-node': 'error',
        'react-dom/no-flush-sync': 'error',
        'react-dom/no-hydrate': 'error',
        'react-dom/no-namespace': 'error',
        'react-dom/no-render': 'error',
        'react-dom/no-render-return-value': 'error',
        'react-dom/no-script-url': 'warn',
        'react-dom/no-unsafe-iframe-sandbox': 'warn',
        'react-dom/no-use-form-state': 'error',
        'react-dom/no-void-elements-with-children': 'error',

        // recommended rules eslint-plugin-react-hooks https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
        // Core hooks rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // preconfigured rules from eslint-plugin-react-refresh https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main/src
        'react-refresh/only-export-components': [
          'error',
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(isUsingNext
                ? [
                  // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
                  'dynamic',
                  'dynamicParams',
                  'revalidate',
                  'fetchCache',
                  'runtime',
                  'preferredRegion',
                  'maxDuration',
                  // https://nextjs.org/docs/app/api-reference/functions/generate-static-params
                  'generateStaticParams',
                  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
                  'metadata',
                  'generateMetadata',
                  // https://nextjs.org/docs/app/api-reference/functions/generate-viewport
                  'viewport',
                  'generateViewport',
                  // https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata
                  'generateImageMetadata',
                  // https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
                  'generateSitemaps',
                ]
                : []),
            ],
          },
        ],

        // recommended rules from eslint-plugin-react-x https://eslint-react.xyz/docs/rules/overview#core-rules
        'react/jsx-key-before-spread': 'warn',
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-children-count': 'warn',
        'react/no-children-for-each': 'warn',
        'react/no-children-map': 'warn',
        'react/no-children-only': 'warn',
        'react/no-children-to-array': 'warn',
        'react/no-clone-element': 'warn',
        'react/no-component-will-mount': 'error',
        'react/no-component-will-receive-props': 'error',
        'react/no-component-will-update': 'error',
        'react/no-context-provider': 'warn',
        'react/no-create-ref': 'error',
        'react/no-default-props': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-duplicate-key': 'error',
        'react/no-forward-ref': 'warn',
        'react/no-implicit-key': 'warn',
        'react/no-missing-key': 'error',
        'react/no-nested-component-definitions': 'error',
        'react/no-nested-lazy-component-declarations': 'error',
        'react/no-prop-types': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-set-state-in-component-did-mount': 'warn',
        'react/no-set-state-in-component-did-update': 'warn',
        'react/no-set-state-in-component-will-update': 'warn',
        'react/no-string-refs': 'error',
        'react/no-unnecessary-use-prefix': 'warn',
        'react/no-unsafe-component-will-mount': 'warn',
        'react/no-unsafe-component-will-receive-props': 'warn',
        'react/no-unsafe-component-will-update': 'warn',
        'react/no-use-context': 'warn',
        'react/no-useless-forward-ref': 'warn',
        'react/prefer-use-state-lazy-initialization': 'warn',
        'react/prefer-namespace-import': 'error',

        ...overrides,
      },
    },

  ]
}
