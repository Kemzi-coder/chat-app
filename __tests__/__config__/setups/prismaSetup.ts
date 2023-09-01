import {prismaMock} from "@mocks/prisma";
import {beforeEach} from "vitest";
import {mockReset} from "vitest-mock-extended";

beforeEach(() => {
	mockReset(prismaMock);
});
