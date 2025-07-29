import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>

        <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
        <p className="text-sm text-gray-600 mb-6">Please fill in this form to create an account.</p>
        <hr className="mb-6" />

        <form action="/index.html" method="post">
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="psw" className="block font-medium mb-1">Password</label>
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Enter Password"
              required
              className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirm" className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm-repeat"
              placeholder="Confirm Password"
              required
              className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="remember"
                defaultChecked
                className="mr-2"
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>

          <p className="text-sm mb-4">
            By creating an account you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">Terms & Privacy</a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              type="button"
              className="w-full sm:w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              onClick={() => navigate("/index")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
