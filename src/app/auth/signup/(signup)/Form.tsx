"use client";

import {Button, TextField, Typography} from "@mui/material";
import {RouteName} from "@src/lib/constants";
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
			username: {value: string};
		};

		const response = await fetch("/api/auth/signup", {
			method: "POST",
			body: JSON.stringify({
				email: target.email.value,
				password: target.password.value,
				username: target.username.value
			}),
			headers: {"content-type": "application/json"}
		});
		if (!response.ok) {
			setError("Something went wrong.");
			return;
		}

		router.push(RouteName.SIGNIN);
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
				<TextField id="username" label="Username" variant="outlined" />
			</div>
			<Button className="ml-auto mt-4" type="submit" variant="contained">
				Sign up
			</Button>
		</form>
	);
};

export default Form;
