import {createUser, getUserByUsername} from "@src/lib/prisma/users";
import {compare, hash} from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username:",
					type: "text",
					placeholder: "Your username"
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "Your password"
				}
			},
			async authorize(credentials) {
				try {
					if (!credentials?.username || !credentials?.password) {
						return null;
					}

					const {username, password} = credentials;

					const user = await getUserByUsername(username);
					if (user == null) {
						const hashedPassword = await hash(password, 12);
						const newUser = await createUser({
							username,
							password: hashedPassword
						});
						return newUser;
					}

					const passwordIsWrong = !(await compare(password, user.password));
					if (passwordIsWrong) {
						throw new Error("Wrong password.");
					}

					return user;
				} catch (e) {
					console.log(e);
					return null;
				}
			}
		})
	],
	callbacks: {
		async session({session, user, token}) {
			console.log(user);

			return session;
		}
	}
});

export {handler as GET, handler as POST};
