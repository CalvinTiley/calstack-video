import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            coverage: {
                exclude: [
                    "sandbox/*",
                    "*.config.*",
                    "src/main.ts",
                    "src/**/*.test.ts",
                    "**/constants/**",
                    "**/typing/**",
                ],
            },
            environment: "jsdom",
            globals: true,
            include: ["src/**/*.test.ts"],
        },
    }),
);
