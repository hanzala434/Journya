"use client"
import { useState } from "react";

export default function AdminDialog(){
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    name: formData.email.split("@")[0], // Extract name from email
                    signup: new Date().toISOString(), // Set last login timestamp
                    phone: "", 

                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add user");
            }

            const data = await response.json();
            console.log("Admin added:", data);

            setIsOpen(false);
            setFormData({ email: ""}); 

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
        <div className="relative ">

      <button
        onClick={() => setIsOpen(true)}
        className="p-4 w-40 bg-[#00BFA6] text-white rounded-md"
      >
        + New User      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-10 rounded-lg shadow-lg w-[500px] relative">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-2xl px-2 top-2 right-2 text-gray-600 hover:text-red-500"
            >
              x
            </button>

            <h2 className="text-2xl font-medium mb-4 text-center">Add User</h2>

            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter email"
                />
              </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" w-1/2 bg-[#00BFA6] text-white py-2 rounded-md font-medium hover:bg-[#009f8a]"
              >
                Send Link
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </div>
        </>
    )
}