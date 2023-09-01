import matchers from "@testing-library/jest-dom/matchers";
import {cleanup} from "@testing-library/react";
import {afterEach, beforeAll, beforeEach, expect, vi, afterAll} from "vitest";
import {server} from "@mocks/server";

vi.mock("next/navigation", () => ({
	...require("next-router-mock"),
	useSearchParams: vi.fn(),
	usePathname: vi.fn()
}));

beforeAll(() => {
	server.listen();
});

beforeEach(() => {
	vi.resetAllMocks();
});

afterEach(() => {
	cleanup();
	server.resetHandlers();
});

afterAll(() => {
	server.close();
});

expect.extend(matchers);
