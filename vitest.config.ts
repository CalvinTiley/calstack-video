import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            coverage: {
                exclude: [
                    "sandbox/*",
                    "eslint.config.js",
                    "commitlint.config.js",
                    "vite.config.ts",
                    "vitest.config.ts",
                    "**/*/constants/*.ts",
                    "src/main.ts",
                    "src/**/*/constants",
                ],
            },
            environment: "jsdom",
            exclude: ["src/**/*/constants"],
            globals: true,
            include: ["src/**/*.test.ts"],
        },
    }),
);
