import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { logout } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-emerald-500 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <Link to="/dashboard" className="text-lg font-bold text-white">
        🚀 Dashboard
      </Link>
      <div className="flex items-center space-x-4">
        {/* Theme Switcher */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-110"
        >
          {theme === "light" ? (
            <FiMoon className="text-purple-600 text-xl" />
          ) : (
            <FiSun className="text-yellow-400 text-xl" />
          )}
        </button>

        {/* 🚀 3D Logout Button */}
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white font-bold text-lg rounded-md shadow-lg transform transition-all duration-300 active:scale-95 hover:bg-red-600"
          style={{
            textShadow: "2px 2px 3px rgba(0, 0, 0, 0.4)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          ⏻ Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
