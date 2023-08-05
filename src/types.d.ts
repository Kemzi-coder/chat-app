import "next-auth";
import {UserProfile} from "./lib/prisma/users";

declare module "next-auth" {
	export type User = UserProfile;
}
