import {Typography} from "@mui/material";
import React from "react";
import Form from "./(signin)/Form";

const Signin = () => {
	return (
		<>
			<Typography className="mb-6" variant="h2">
				Signin
			</Typography>
			<Form />
		</>
	);
};

export default Signin;
