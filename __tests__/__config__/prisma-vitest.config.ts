import {defineConfig, mergeConfig} from "vitest/config";
import vitestConfig from "../../vitest.config";

export default mergeConfig(
	vitestConfig,
	defineConfig({
		test: {
			include: ["./__tests__/src/lib/prisma/**/*.test.ts"],
			setupFiles: ["./__tests__/__config__/setups/prismaSetup.ts"]
		}
	})
);
