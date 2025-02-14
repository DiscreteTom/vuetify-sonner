import { defineConfig } from 'tsup'
import vuePlugin from 'unplugin-vue/esbuild'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  clean: true,
  external: [/vuetify/],
  dts: false,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    }
  },
  esbuildPlugins: [vuePlugin()],
})
