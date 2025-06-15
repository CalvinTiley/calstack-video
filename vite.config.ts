import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.tsx"),
            fileName: (format) => `calstack-video.${format}.js`,
            name: "CalstackVideo",
        },
        rollupOptions: {
            external: ["react", "react-dom"], // don't bundle react
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            "~components": path.resolve(__dirname, "src/components"),
            "~contexts": path.resolve(__dirname, "src/contexts"),
            "~hooks": path.resolve(__dirname, "src/hooks"),
            "~utilities": path.resolve(__dirname, "src/utilities"),
        },
    },
});
