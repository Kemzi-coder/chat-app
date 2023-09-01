import Signup from "@src/app/auth/signup/page";
import {render, screen} from "@testing-library/react";
import {test, expect} from "vitest";

test("should render signup page", () => {
	render(<Signup />);

	expect(screen.getByText(/signup/i)).toBeInTheDocument();
	expect(screen.getByRole("form", {name: /signup/i})).toBeInTheDocument();
});
