"use client";

import {Button} from "@mui/material";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

const SignoutButton = () => {
	const router = useRouter();

	const handleClick = async () => {
		await signOut({redirect: false});

		router.push("/auth/signin");
	};

	return (
		<Button onClick={handleClick} variant="contained">
			Sign out
		</Button>
	);
};

export default SignoutButton;
