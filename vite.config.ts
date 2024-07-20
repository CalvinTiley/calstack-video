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
            formats: ["es", "cjs"],
            fileName: "index",
        },
        rollupOptions: {
            external: [resolve(__dirname, "sandbox")],
        },
        sourcemap: true,
    },
    plugins: [
        checker({
            typescript: true,
        }),
        dts({
            rollupTypes: true,
            exclude: [
                "sandbox",
                "vite.config.ts",
                "src/setupTests.ts",
                "**/*/*.test.ts",
                "jest.*",
            ],
        }),
    ],
    resolve: {
        alias: {
            "@builders": resolve(__dirname, "./src/builders"),
            "@constants": resolve(__dirname, "./src/constants"),
            "@dom": resolve(__dirname, "./src/dom"),
            "@features": resolve(__dirname, "./src/features"),
            "@typing": resolve(__dirname, "./src/typing"),
            "@utils": resolve(__dirname, "./src/utils"),
            "@": resolve(__dirname, "./src"),
        },
    },
});
