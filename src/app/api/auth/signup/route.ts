import {createUser, getUserByEmail} from "@src/lib/prisma/users";
import {hash} from "bcryptjs";
import {NextResponse} from "next/server";

const POST = async (req: Request) => {
	const {email, username, password} = await req.json();

	const userExists = (await getUserByEmail(email)) != null;
	if (userExists) {
		return NextResponse.json({error: "User already exists."}, {status: 400});
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
