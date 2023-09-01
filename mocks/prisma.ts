import {PrismaClient} from "@prisma/client";
import {vi} from "vitest";
import {DeepMockProxy, mockDeep} from "vitest-mock-extended";

vi.mock("@src/prisma/client", () => ({
	__esModule: true,
	default: mockDeep<PrismaClient>()
}));

import prisma from "@src/prisma/client";

const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

export {prismaMock};
