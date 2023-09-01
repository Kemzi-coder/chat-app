import Signin from "@src/app/auth/signin/page";
import {render, screen} from "@testing-library/react";
import {expect, test} from "vitest";

test("should render signin page", () => {
	render(<Signin />);

	expect(screen.getByText(/signin/i)).toBeInTheDocument();
	expect(screen.getByRole("form", {name: /signin/i})).toBeInTheDocument();
});
