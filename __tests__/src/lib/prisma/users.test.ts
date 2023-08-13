import {User} from "@prisma/client";
import {createUser, getUserByEmail} from "@src/lib/prisma/users";
import {prismaMock} from "@tests/__config__/setups/prismaSetup";
import {expect, test} from "vitest";

test("should create a new user", async () => {
	const userMock: User = {
		id: 1,
		email: "a@gmail.com",
		username: "some username",
		password: "some password",
		createdAt: new Date()
	};
	prismaMock.user.create.mockResolvedValue(userMock);

	const user = await createUser({
		email: userMock.email,
		username: userMock.username,
		password: userMock.password
	});

	expect(prismaMock.user.create).toHaveBeenCalledWith({
		data: {
			email: userMock.email,
			username: userMock.username,
			password: userMock.password
		}
	});
	expect(user).toStrictEqual(userMock);
});

test("should get a user by email", async () => {
	const userMock: User = {
		id: 1,
		email: "a@gmail.com",
		username: "some username",
		password: "some password",
		createdAt: new Date()
	};
	prismaMock.user.findUnique.mockResolvedValue(userMock);

	const user = await getUserByEmail(userMock.email);

	expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
		where: {email: userMock.email}
	});
	expect(user).toStrictEqual(userMock);
});
