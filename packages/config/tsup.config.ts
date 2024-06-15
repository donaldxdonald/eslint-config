import { defineConfig } from 'tsup'

export default defineConfig({
  tsconfig: "../../tsconfig.json",
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  clean: true,
  dts: true,
})