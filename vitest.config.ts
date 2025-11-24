import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    exclude: ["node_modules", "dist"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      exclude: [
        "node_modules/",
        "src/test/",
        "e2e/",
        "*.config.ts",
        "**/*.d.ts",
        "**/*.test.{ts,tsx}",
        "**/*.spec.{ts,tsx}",
        "**/*.stories.{ts,tsx}",
        "src/stories/**",
        ".storybook/**",
        // 🏗️ INFRASTRUCTURE TIER (0%): TypeScript validates, no logic to test
        "src/shared/types/**",
      ],
      thresholds: {
        global: {
          statements: 80,
          branches: 80,
          functions: 100,
          lines: 80,
        },
        // 🔧 IMPORTANT TIER (80%+): User-facing features
        "src/features/**/*.tsx": {
          statements: 80,
          functions: 90,
          lines: 80,
        },
      },
    },
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "jsdom",
          setupFiles: "./src/test/setup.ts",
        },
      },
    ],
  },
});
