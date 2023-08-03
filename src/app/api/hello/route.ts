import {NextResponse} from "next/server";

const GET = async () => {
	return NextResponse.json("Hello world!");
};

export {GET};
