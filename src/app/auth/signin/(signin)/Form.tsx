"use client";

import {Button, TextField, Typography} from "@mui/material";
import {RouteName} from "@src/lib/constants";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";

const Form = () => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			email: {value: string};
			password: {value: string};
		};

		const response = await signIn("credentials", {
			redirect: false,
			email: target.email.value,
			password: target.password.value
		});
		const error = response?.error;

		if (error) {
			setError(error);
			return;
		}

		router.push(RouteName.HOME);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-start max-w-[300px] w-full">
			{error ? (
				<Typography className="text-red-500 mb-4">{error}</Typography>
			) : null}
			<div className="flex flex-col gap-4 w-full">
				<TextField id="email" label="Email address" variant="outlined" />
				<TextField
					id="password"
					label="Password"
					type="password"
					variant="outlined"
				/>
			</div>
			<Button className="ml-auto mt-4" type="submit" variant="contained">
				Sign in
			</Button>
		</form>
	);
};

export default Form;
