import path from "path";
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig(({ mode }) => {
  console.log("⚓ " + mode);
  return {
    root: "./threejs/src",
    publicDir: "../public",
    base: mode === "development" ? "/" : "/three-template/",
    plugins: [glsl()],
    build: {
      rollupOptions: {
        input: {
          home: path.resolve(__dirname, "./threejs/src/index.html"),
        },
      },
      outDir: "../dist",
      emptyOutDir: true,
    },
    server: {
      host: true,
    },
  };
});
