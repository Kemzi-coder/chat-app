import {defineWorkspace} from "vitest/config";

export default defineWorkspace([
	{
		extends: "./__tests__/__config__/react-vitest.config.ts",
		test: {name: "react"}
	},
	{
		extends: "./__tests__/__config__/global-vitest.config.ts",
		test: {name: "global"}
	}
]);
