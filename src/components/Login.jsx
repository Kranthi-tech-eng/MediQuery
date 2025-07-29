import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>

        <form action="/index" method="get">
          <div className="flex justify-center mb-4">
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
              className="w-24 h-24 rounded-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="uname" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="uname"
              name="uname"
              placeholder="Enter Username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="psw" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Enter Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>

          <div className="flex items-center mt-2">
            <input type="checkbox" name="remember" defaultChecked />
            <label className="ml-2 text-sm">Remember me</label>
          </div>

          <div className="flex items-center justify-between mt-6 bg-gray-100 p-3 rounded-md">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => (window.location.href = "/index")}
            >
              Cancel
            </button>
            <span className="text-sm">
              Forgot <a href="#" className="text-blue-500 hover:underline">password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
