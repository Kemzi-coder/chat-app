import {Typography} from "@mui/material";
import {getServerSession} from "next-auth";
import SignoutButton from "./(home)/SignoutButton";

const Home = async () => {
	const session = await getServerSession();
	console.log(session);

	return (
		<main>
			<Typography variant="h2">Chat app</Typography>
			<SignoutButton />
		</main>
	);
};

export default Home;
