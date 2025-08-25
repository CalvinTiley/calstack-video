import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            formats: ["es", "cjs"],
            entry: path.resolve(__dirname, "src/index.ts"),
            fileName: (format) => `calstack-video.${format}.js`,
            name: "CalstackVideo",
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            input: {
                index: path.resolve(__dirname, "src/index.ts"),
                contexts: path.resolve(__dirname, "src/contexts/index.ts"),
                hooks: path.resolve(__dirname, "src/hooks/index.ts"),
                types: path.resolve(__dirname, "src/types/index.ts"),
                ui: path.resolve(__dirname, "src/ui/index.ts"),
                utilities: path.resolve(__dirname, "src/utilities/index.ts"),
            },
            output: [
                {
                    dir: "dist",
                    format: "es",
                    entryFileNames: "[name].mjs",
                    chunkFileNames: "chunks/[name]-[hash].mjs",
                    exports: "named",
                },
                {
                    dir: "dist",
                    format: "cjs",
                    entryFileNames: "[name].cjs",
                    chunkFileNames: "chunks/[name]-[hash].cjs",
                    exports: "named",
                },
            ],
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            "~contexts": path.resolve(__dirname, "src/contexts/index.ts"),
            "~hooks": path.resolve(__dirname, "src/hooks/index.ts"),
            "~types": path.resolve(__dirname, "src/types/index.ts"),
            "~ui": path.resolve(__dirname, "src/ui/index.ts"),
            "~utilities": path.resolve(__dirname, "src/utilities/index.ts"),
        },
    },
});
