import { resolve } from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            formats: ["es"],
            fileName: "index",
        },
        sourcemap: true,
    },
    plugins: [
        checker({
            typescript: true,
        }),
        dts(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@constants": resolve(__dirname, "./src/constants"),
            "@dom": resolve(__dirname, "./src/dom"),
            "@typing": resolve(__dirname, "./src/typing"),
            "@utils": resolve(__dirname, "./src/utils"),
        },
    },
});
