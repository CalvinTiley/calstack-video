import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~components": path.resolve(__dirname, "src/components"),
            "~contexts": path.resolve(__dirname, "src/contexts"),
            "~hooks": path.resolve(__dirname, "src/hooks"),
            "~utilities": path.resolve(__dirname, "src/utilities"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.tsx"),
            name: "CalstackVideo",
            fileName: (format) => `calstack-video.${format}.js`,
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
});
