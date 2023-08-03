import {defineConfig} from "vitest/config";
import path from "path";

export default defineConfig({
	test: {setupFiles: ["./__tests__/__config__/setups/globalSetup.ts"]},
	resolve: {
		alias: [
			{find: "@src", replacement: path.resolve(__dirname, "./src")},
			{find: "@tests", replacement: path.resolve(__dirname, "./__tests__")}
		]
	}
});
