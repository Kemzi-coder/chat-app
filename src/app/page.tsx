import {Button, Typography} from "@mui/material";
import {getServerSession} from "next-auth";

const Home = async () => {
	const session = await getServerSession();
	console.log(session);

	return (
		<main>
			<Typography variant="h2">Chat app</Typography>
			<Button variant="contained">Get started</Button>
		</main>
	);
};

export default Home;
