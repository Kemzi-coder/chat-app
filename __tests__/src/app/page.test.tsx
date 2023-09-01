import Home from "@src/app/page";
import {render, screen} from "@testing-library/react";
import {getServerSession} from "next-auth";
import {Mock, expect, test, vi} from "vitest";

vi.mock("next-auth", () => ({
	getServerSession: vi.fn()
}));
const getServerSessionMock = getServerSession as Mock;

test("should render Home page", async () => {
	getServerSessionMock.mockResolvedValue({user: {email: "a@gmail.com"}});
	render(await Home());

	expect(screen.getByText("Chat app")).toBeInTheDocument();
	expect(screen.getByRole("button", {name: "Sign out"})).toBeInTheDocument();
});
