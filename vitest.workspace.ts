import {defineWorkspace} from "vitest/config";

export default defineWorkspace([
	{
		extends: "./__tests__/__config__/react-vitest.config.ts",
		test: {name: "react"}
	},
	{
		extends: "./__tests__/__config__/prisma-vitest.config.ts",
		test: {name: "prisma"}
	},
	{
		extends: "./__tests__/__config__/api-vitest.config.ts",
		test: {name: "api"}
	}
]);
