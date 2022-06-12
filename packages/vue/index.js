module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@dndxdnd/eslint-config-ts',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
