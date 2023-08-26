import Main from "./(home)/Main";
import Sidebar from "./(home)/(sidebar)/Sidebar";
import {getServerSession} from "next-auth";
import {getUserByEmail} from "@src/lib/prisma/users";

const Home = async () => {
	const session = await getServerSession();
	const user = await getUserByEmail(session?.user?.email!);

	return (
		<main className="h-screen">
			<div className="grid grid-cols-[minmax(auto,_350px)_minmax(0,_1fr)] h-full">
				<Sidebar user={user} />
				<Main />
			</div>
		</main>
	);
};

export default Home;
