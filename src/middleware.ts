import {getToken} from "next-auth/jwt";
import {NextRequest, NextResponse} from "next/server";
import {RouteName} from "./lib/constants";

const middleware = async (req: NextRequest) => {
	const path = req.nextUrl.pathname;

	const session = await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET
	});

	const isAuthorized = session !== null;
	const isAuthRoute = path.startsWith("/auth");
	const isProtectedRoute = !isAuthRoute;

	if (isAuthRoute && isAuthorized) {
		return NextResponse.redirect(new URL(RouteName.HOME, req.url));
	}

	if (isProtectedRoute && !isAuthorized) {
		return NextResponse.redirect(new URL(RouteName.SIGNIN, req.url));
	}

	return NextResponse.next();
};

export const config = {
	matcher: "/((?!api|_next|fonts|500|examples|[\\w-]+\\.\\w+).*)"
};

export {middleware};
