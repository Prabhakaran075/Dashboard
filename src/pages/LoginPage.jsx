import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Validate credentials
    if (!username || !password) {
      setError("All fields are required.");
      return;
    }

    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
      setError("Invalid username or password.");
      return;
    }

    // Success: Log in and redirect
    login(username);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-rose-500 to-violet-700">
      <div className="p-8 bg-white shadow-2xl rounded-lg w-96">
        {/* Animated Welcome Text */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4 tracking-wide animate-fade-in">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 text-center mb-4 animate-fade-in-slow">
          Sign in to continue
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col">
          <div className="relative mb-3">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="pl-10 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-3">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="p-2 w-full bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-500 text-xs text-center mt-3 hover:text-gray-700 transition-all duration-300 cursor-pointer">
          Forgot Password?
        </p>
      </div>

      {/* Animated Gradient Text */}
      <p className="mt-5 text-lg font-bold text-white animate-text-glow">
        Secure & Fast Login 🚀
      </p>
    </div>
  );
};

export default LoginPage;