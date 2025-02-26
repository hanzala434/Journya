'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <div className="m-1 flex justify-center">
            <Link className="bg-black text-white flex justify-center w-40 h-20 py-5 rounded" href="/dashboard">
              Dashboard
            </Link>
          </div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
          <a href="/register">Sign up</a>
        </>
      )}
    </>
  );
}
