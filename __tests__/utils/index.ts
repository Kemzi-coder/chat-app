import {NextResponse} from "next/server";
import {
	MockRequest,
	RequestOptions as RequestOptionsFromLibrary,
	createRequest
} from "node-mocks-http";

type RequestOptions = Pick<
	RequestOptionsFromLibrary,
	"method" | "body" | "query" | "headers"
>;

type ApiRequest = Request & MockRequest<Request>;

const mockRequest = (options?: RequestOptions) => {
	const req: ApiRequest = createRequest({
		...options,
		headers: {"content-type": "application/json", ...options?.headers}
	});
	return req;
};

const requestHandler = async (
	handler: (request?: Request) => Promise<NextResponse>,
	options?: RequestOptions
) => {
	const req = mockRequest(options);
	const res = await handler(req);

	const body = await res.json();
	return {res, body};
};

export {requestHandler};
