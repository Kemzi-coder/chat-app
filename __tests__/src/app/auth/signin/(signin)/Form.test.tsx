import Form from "@src/app/auth/signin/(signin)/Form";
import {UserPersonalData} from "@src/lib/prisma/users";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, test} from "vitest";

const setUp = () => {
	const utils = render(<Form />);
	const form = screen.getByRole("form", {name: /signin/i});
	const emailField = screen.getByRole("textbox", {name: /email address/i});
	const passwordField = screen.getByLabelText(/password/i);
	const submitButton = screen.getByRole("button", {name: /sign in/i});
	const user = userEvent.setup();

	return {
		form,
		emailField,
		passwordField,
		submitButton,
		user,
		...utils
	};
};

test("should render signup form", () => {
	const {form, emailField, passwordField, submitButton} = setUp();

	expect(form).toBeInTheDocument();
	expect(emailField).toBeInTheDocument();
	expect(passwordField).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
});

test("should accept input", async () => {
	const {emailField, passwordField, user} = setUp();
	const mockUser: Omit<UserPersonalData, "username"> = {
		email: "a@gmail.com",
		password: "123456"
	};

	await user.type(emailField, mockUser.email);
	expect(emailField).toHaveValue(mockUser.email);

	await user.type(passwordField, mockUser.password);
	expect(passwordField).toHaveValue(mockUser.password);
});
