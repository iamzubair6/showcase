import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    manifest: true,
    outDir: "build",
    // sourcemap: true,
    // target: "es2015",
    // lib: {
    //   entry: "./src/index.ts",
    //   name: "ReactScroll",
    //   formats: ["es", "cjs"],
    // },
    // rollupOptions: {
    //   external: ["react", "react-dom"],
    //   output: {
    //     globals: {
    //       react: "React",
    //       "react-dom": "ReactDOM",
    //     },
    //   },
    // },
  },
  server: {
    port: 3000,
    open: true,
  },
});
