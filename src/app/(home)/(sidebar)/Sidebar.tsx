import {Avatar, Typography} from "@mui/material";
import {UserPersonalData} from "@src/lib/prisma/users";
import {FC} from "react";

interface Props {
	user: UserPersonalData | null;
}

const Sidebar: FC<Props> = ({user}) => {
	if (!user) {
		return;
	}

	return (
		<aside className="flex flex-col gap-6 p-6">
			<div className="flex gap-4 items-center">
				<Avatar alt={user.username} src="" />
				<Typography variant="h5">{user.username}</Typography>
			</div>
			<div>Chats</div>
		</aside>
	);
};

export default Sidebar;
