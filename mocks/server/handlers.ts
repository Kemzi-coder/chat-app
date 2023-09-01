import {rest} from "msw";

const handlers = [
	rest.get("/api/hello", (req, res, ctx) => {
		return res(ctx.json("Hello world!"));
	})
];

export default handlers;
