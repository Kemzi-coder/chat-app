import {Prisma, User} from "@prisma/client";
import prisma from "@src/prisma/client";

const userPersonalData = Prisma.validator<Prisma.UserDefaultArgs>()({
	select: {email: true, username: true, password: true}
});
type UserPersonalData = Prisma.UserGetPayload<typeof userPersonalData>;

const userProfile = Prisma.validator<Prisma.UserDefaultArgs>()({
	select: {id: true, username: true, createdAt: true}
});
type UserProfile = Prisma.UserGetPayload<typeof userProfile>;

const createUser = async ({
	email,
	username,
	password
}: UserPersonalData): Promise<User> => {
	const user = await prisma.user.create({data: {email, username, password}});
	return user;
};

const getUserByEmail = async (email: User["email"]): Promise<User | null> => {
	const user = await prisma.user.findUnique({where: {email}});
	return user;
};

const getUserByUsername = async (
	username: User["username"]
): Promise<User | null> => {
	const user = await prisma.user.findUnique({where: {username}});
	return user;
};

export type {UserPersonalData, UserProfile};
export {createUser, getUserByEmail, getUserByUsername};
