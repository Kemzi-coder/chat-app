import {getUserByEmail} from "@src/lib/prisma/users";
import {compare} from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email:",
					type: "text",
					placeholder: "Your email"
				},
				password: {
					label: "Password:",
					type: "password",
					placeholder: "Your password"
				}
			},
			async authorize(credentials) {
				try {
					const {email, password} = credentials || {};
					if (!email || !password) {
						throw new Error("Missing email or password.");
					}

					const user = await getUserByEmail(email);
					if (user == null) {
						throw new Error("Invalid email.");
					}

					const passwordIsInvalid = !(await compare(password, user.password));
					if (passwordIsInvalid) {
						throw new Error("Invalid password.");
					}

					return user;
				} catch (e) {
					console.log(e);
					return null;
				}
			}
		})
	]
});

export {handler as GET, handler as POST};
