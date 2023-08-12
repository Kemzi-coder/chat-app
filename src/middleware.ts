import {getToken} from "next-auth/jwt";
import {NextRequest, NextResponse} from "next/server";

const middleware = async (req: NextRequest) => {
	const path = req.nextUrl.pathname;

	const session = await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET
	});

	if (path.startsWith("/auth")) {
		if (session) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	} else {
		if (!session) {
			return NextResponse.redirect(new URL("/auth/signin", req.url));
		}
	}

	return NextResponse.next();
};

export const config = {
	matcher: "/"
};

export {middleware};
