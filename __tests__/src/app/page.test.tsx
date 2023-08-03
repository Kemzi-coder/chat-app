import {expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import Home from "@src/app/page";

test("should render Home page", () => {
	render(<Home />);

	expect(screen.getByText("Chat app")).toBeInTheDocument();
	expect(screen.getByRole("button", {name: "Get started"})).toBeInTheDocument();
});
