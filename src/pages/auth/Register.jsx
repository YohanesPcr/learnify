import React, { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (form.password !== form.confirmPassword) {
        setError("Password confirmation does not match.");
        setLoading(false);
        return;
      }
      alert("Registration successful!");
      setLoading(false);
    }, 1500);
  };

  const isDisabled =
    !form.name || !form.email || !form.password || !form.confirmPassword;

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Account</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded flex items-center text-sm">
          <BsFillExclamationDiamondFill className="me-2" />
          {error}
        </div>
      )}
      {loading && (
        <div className="bg-gray-100 p-3 mb-4 rounded text-sm flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon tunggu...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full py-2 mt-2 rounded-full font-medium transition duration-200 text-white ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          Sign up
        </button>
      </form>

      <div className="mt-6 text-sm text-center text-gray-700">
        Already have an account?{" "}
        <a href="#" className="text-black underline">
          Sign in
        </a>
      </div>
    </>
  );
}
