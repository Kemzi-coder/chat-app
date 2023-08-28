import {
	createUser,
	getUserByEmail,
	getUserByUsername
} from "@src/lib/prisma/users";
import {hash} from "bcryptjs";
import {NextResponse} from "next/server";

const POST = async (req: Request) => {
	const {email, username, password} = await req.json();

	const userWithEmailExists = (await getUserByEmail(email)) != null;
	if (userWithEmailExists) {
		return NextResponse.json(
			{error: `User with email of ${email} already exists.`},
			{status: 400}
		);
	}

	const userWithUsernameExists = (await getUserByUsername(username)) != null;
	if (userWithUsernameExists) {
		return NextResponse.json(
			{error: `User with username of ${username} already exists.`},
			{status: 400}
		);
	}

	const hashedPassword = await hash(password, 12);
	const user = await createUser({
		password: hashedPassword,
		email,
		username
	});
	return NextResponse.json(user);
};

export {POST};
