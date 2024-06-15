import { defineConfig } from 'tsup'

export default defineConfig({
  tsconfig: "../../tsconfig.json",
  entry: ['src/index.ts'],
  format: 'esm',
  outDir: 'dist',
  clean: true,
  dts: true,
})