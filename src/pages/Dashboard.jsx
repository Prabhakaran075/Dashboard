import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";

const usersData = [
  {
    id: 1,
    name: "MONISH CHANDRASEKARAN",
    company: { bs: "Director" },
    email: "e.monish182003@gmail.com",
    avatar: "https://cdn.bitrix24.in/b32626871/resize_cache/59/ff58db95aecdfa09ae61b51b5fd8f63f/main/ff5/ff5b364afe33fc44a37649a63dad496f/monish-c.jpg.png"
  },
  {
    id: 2,
    name: "SANTHOSH KUMAR S",
    company: { bs: "Lead Developer" },
    email: "santhosh27nexgen@gmail.com",
    avatar: "https://nexarc.bitrix24.in/b32626871/resize_cache/375/a7fa78f57e73ecbd0b9500a062d0d214/main/97c/97ca58973f069cf268d4782516af2f02/avatar.png"
  },
  {
    id: 3,
    name: "PRABHAKARAN S",
    company: { bs: "Full Stack Trainee" },
    email: "prabhakarans@154gmail.com",
    avatar: "https://cdn.bitrix24.in/b32626871/resize_cache/157/ff58db95aecdfa09ae61b51b5fd8f63f/main/3b9/3b962f746272b4f9de9bd697c83c2d3e/avatar.png"
  },
  {
    id: 4,
    name: "BOOMIKA M",
    company: { bs: "Market Analysis Trainee" },
    email: "mikaboomika837@gmail.com",
    avatar: "https://nexarc.bitrix24.in/b32626871/resize_cache/221/a7fa78f57e73ecbd0b9500a062d0d214/main/755/75577edcad39e1a7cd24dfcacbe91124/avatar.png"
  },
  {
    id: 5,
    name: "ABISHEK M",
    company: { bs: "Video Editor" },
    email: "apishekapishek31@gmail.com",
    avatar: "https://nexarc.bitrix24.in/b32626871/resize_cache/233/a7fa78f57e73ecbd0b9500a062d0d214/main/628/6288d54bd20c0f4bf4349997b311c760/avatar.png"
  }
];

const Dashboard = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div className="p-6 bg-gray-700 dark:bg-gray-800 min-h-screen">
      <Navbar />
      <h2 className="text-3xl font-bold text-center mt-8 mb-6 text-gray-100">Welcome, {user.name}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usersData.map((u) => (
          <div key={u.id} className="relative bg-gray-600 dark:bg-gray-700 shadow-xl rounded-xl p-6 w-96 transition transform hover:rotate-3 hover:scale-105 hover:shadow-3xl text-center mx-auto">
            <div className="flex justify-center">
              <img
                src={u.avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full border-4 border-gray-400 dark:border-gray-500 shadow-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-gray-100">
                {u.name}
              </h3>
              <p className="text-gray-300 italic">
                {u.company.bs}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {u.email}
              </p>
              <div className="mt-4 p-2 bg-gradient-to-r from-green-500 to-yellow-500 dark:from-teal-600 dark:to-lime-600 text-white rounded-lg shadow-md text-sm">
                ⏳ Working Hours: 9 AM - 6 PM
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
