import react from "@vitejs/plugin-react";
import {defineConfig, mergeConfig} from "vitest/config";
import vitestConfig from "../../vitest.config";

export default mergeConfig(
	vitestConfig,
	defineConfig({
		plugins: [react()],
		test: {
			include: ["./__tests__/src/**/*.test.tsx"],
			setupFiles: ["./__tests__/__config__/setups/reactSetup.ts"],
			environment: "jsdom"
		}
	})
);
