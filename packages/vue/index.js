module.exports = {
  extends: [
    '@dndxdnd/eslint-config-ts',
  ],
  overrides: [
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        // Vue
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 2,
          },
        }],
        'vue/no-undef-properties': ['error', {
          ignores: ['/^\\$/'],
        }],
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
