import {expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import Home from "@src/app/page";
import {vi} from "vitest";

vi.mock("next/navigation", () => ({
	...require("next-router-mock"),
	useSearchParams: vi.fn(),
	usePathname: vi.fn()
}));

vi.mock("next-auth");

test("should render Home page", async () => {
	render(await Home());

	expect(screen.getByText("Chat app")).toBeInTheDocument();
	expect(screen.getByRole("button", {name: "Sign out"})).toBeInTheDocument();
});
