import { defineConfig } from "vite";
import react from "vite-preset-react";
import { uglify } from "rollup-plugin-uglify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ removeDevtoolsInProd: true })],
  build: {
    rollupOptions: {
      plugins: [uglify()],
    },
  },
});
