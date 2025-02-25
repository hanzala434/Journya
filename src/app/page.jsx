'use client';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  // Debugging: Check session data and status
  console.log("Session Data:", session);
  console.log("Auth Status:", status);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        <div className="m-1 flex justify-center">
          <Link className="bg-black text-white flex justify-center w-40 h-20 py-5 rounded" href="/dashboard">
            Dashboard
          </Link>
        </div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
