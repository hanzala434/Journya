"use client"; 

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
  
    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard"); // Redirect on successful login
    }
  };
  

  return (
    <div className="p-8 m-2 w-full">
      <h1 className="flex justify-center text-2xl font-medium">Welcome Back</h1>
      <h3 className="flex my-2 justify-center text-slate-500">
        Welcome Back! Please enter your details
      </h3>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-b-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#00BFA6]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border-b-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#00BFA6]"
              />
            </div>
            <div className="text-sm my-1">
              <a href="#" className="font-semibold text-[#00BFA6] hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#00BFA6] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:text-[#00BFA6] hover:bg-white border-2 border-transparent hover:border-[#00BFA6]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
