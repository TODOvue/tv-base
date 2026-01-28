import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: isDemo ? './' : undefined,
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      skipDiagnostics: false,
    })],
  build: {
    lib: {
      entry: "src/entry.ts",
      name: "TvCHANGE",
      fileName: format => `tv-CHANGE.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: 'named'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
