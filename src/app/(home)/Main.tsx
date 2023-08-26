import {Typography} from "@mui/material";
import React from "react";
import SignoutButton from "./SignoutButton";

const Main = () => {
	return (
		<div className="p-6">
			<Typography variant="h2">Chat app</Typography>
			<SignoutButton />
		</div>
	);
};

export default Main;
