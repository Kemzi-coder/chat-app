import Form from "@src/app/auth/signup/(signup)/Form";
import {UserPersonalData} from "@src/lib/prisma/users";
import {RenderOptions, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, test} from "vitest";

interface SetupOptions {
	wrapper?: RenderOptions["wrapper"];
}

const setUp = ({wrapper}: SetupOptions = {}) => {
	const utils = render(<Form />, {wrapper});
	const user = userEvent.setup();
	const form = screen.getByRole("form", {name: /signup/i});
	const emailField = screen.getByRole("textbox", {name: /email address/i});
	const passwordField = screen.getByLabelText(/password/i);
	const usernameField = screen.getByRole("textbox", {name: /username/i});
	const submitButton = screen.getByRole("button", {name: /sign up/i});

	return {
		form,
		emailField,
		passwordField,
		usernameField,
		submitButton,
		user,
		...utils
	};
};

test("should render signup form", () => {
	const {form, emailField, passwordField, usernameField, submitButton} =
		setUp();

	expect(form).toBeInTheDocument();
	expect(emailField).toBeInTheDocument();
	expect(passwordField).toBeInTheDocument();
	expect(usernameField).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
});

test("should accept input", async () => {
	const {emailField, passwordField, usernameField, submitButton, user} =
		setUp();
	const mockUser: UserPersonalData = {
		email: "a@gmail.com",
		username: "username",
		password: "123456"
	};

	await user.type(emailField, mockUser.email);
	expect(emailField).toHaveValue(mockUser.email);

	await user.type(passwordField, mockUser.password);
	expect(passwordField).toHaveValue(mockUser.password);

	await user.type(usernameField, mockUser.username);
	expect(usernameField).toHaveValue(mockUser.username);
});
