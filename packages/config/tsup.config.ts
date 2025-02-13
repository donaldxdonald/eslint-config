import { defineConfig } from 'tsup'

export default defineConfig({
  tsconfig: '../../tsconfig.json',
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'es2022',
  outDir: 'dist',
  clean: true,
  dts: true,
})
