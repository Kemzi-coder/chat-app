import {PrismaClient} from "@prisma/client";
import {mockDeep, mockReset, DeepMockProxy} from "vitest-mock-extended";
import {vi, beforeEach} from "vitest";
import prisma from "@src/prisma/client";

vi.mock("@src/prisma/client", () => ({
	__esModule: true,
	default: mockDeep<PrismaClient>()
}));

beforeEach(() => {
	mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
