import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy authentication
        const user = { id: "1", name: "John Doe", email: "test@example.com", password: "password123" };

        if (credentials.email === user.email && credentials.password === user.password) {
          return user; // Successful login
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", 
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
