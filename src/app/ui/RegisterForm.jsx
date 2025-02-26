"use client"; 

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    passwordConfirm:'',
    phone:'',
})

const {name,email,password,passwordConfirm,phone}=formData

  const [error, setError] = useState("");
  const router = useRouter();

  const onChange=(e)=>{
    setFormData((prevState)=>({
       ...prevState,
       [e.target.name]:e.target.value,
    }))
}

const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== passwordConfirm) {
    setError("Passwords do not match");
    return;
  }

  try {
    const res = await fetch("/api/authUsers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); 

    if (!res.ok) {
      setError(data.message || "Something went wrong");
      return;
    }

    router.push("/dashboard");
  } catch (error) {
    setError("Server error. Please try again later.");
  }
};

  

  return (
    <div >
      <h1 className="flex justify-center text-2xl font-medium">Create an Account</h1>
      <h3 className="flex my-2 justify-center text-slate-500">
        Welcome Back! Please enter your details
      </h3>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-1">
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
                onChange={onChange}
                className="block w-full border-b-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#00BFA6]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={onChange}
                className="block w-full border-b-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#00BFA6]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-900">
              Phone No.
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                required
                value={phone}
                onChange={onChange}
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
                onChange={onChange}
                className="block w-full border-b-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#00BFA6]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required
                autoComplete="current-password"
                value={passwordConfirm}
                onChange={onChange}
                className="block w-full border-b-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#00BFA6]"
              />
            </div>
            
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#00BFA6] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:text-[#00BFA6] hover:bg-white border-2 border-transparent hover:border-[#00BFA6]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
