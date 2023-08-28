"use client";

import {Button} from "@mui/material";
import {RouteName} from "@src/lib/constants";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

const SignoutButton = () => {
	const router = useRouter();

	const handleClick = async () => {
		await signOut({redirect: false});

		router.push(RouteName.SIGNIN);
	};

	return (
		<Button onClick={handleClick} variant="contained">
			Sign out
		</Button>
	);
};

export default SignoutButton;
