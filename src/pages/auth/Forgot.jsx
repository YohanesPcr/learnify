import React, { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (!email.includes("@")) {
        setError("Email tidak valid.");
        setLoading(false);
        return;
      }
      setSent(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Forgot Password</h2>

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
      {sent && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-sm">
          Link reset password telah dikirim ke email kamu.
        </div>
      )}

      {!sent && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={!email}
            className={`w-full py-2 mt-2 rounded-full font-medium transition duration-200 text-white ${
              !email
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
          >
            Send reset link
          </button>
        </form>
      )}

      <div className="mt-6 text-sm text-center text-gray-700">
        <a href="#" className="text-black underline">
          Back to Sign in
        </a>
      </div>
    </>
  );
}
