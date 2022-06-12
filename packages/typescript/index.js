module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'prefer-arrow',
    'html',
    'unicorn',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    // JS
    indent: ['error', 2],
    'guard-for-in': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'prefer-arrow/prefer-arrow-functions': [
      'off',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "import/order": 0,
    "no-plusplus": 0,

    'prefer-const': 'error',
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    'keyword-spacing': 'error',
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    // 控制逗号前后的空格
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    semi: 'off',
    'no-extra-semi': 'off',
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 'error',
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'as-needed'],
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': ['error', 'never'],
    // 禁止或强制在单行代码块中使用空格(禁用)
    'block-spacing': ['error', 'never'],
    // 对象里面的空格
    'object-curly-spacing': ['error', 'always'],
    // 运算符前后的空格
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-before-function-paren': ['error', 'never'],
    // 单引号
    quotes: 'off',
    'max-len': ['error', {
      code: 150,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-return-await': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-bitwise': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'space-in-parens': ['error', 'never'],
    'switch-colon-spacing': ['error'],

    // TS
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
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
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/semi': [
      'error',
      'never',
    ],
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        "allowSingleExtends": true
      }
    ]
  },
}
