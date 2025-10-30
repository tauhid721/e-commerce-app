import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  if (!user) {
    navigate("/login");
    return null;
  }
  const orders = JSON.parse(localStorage.getItem("orders") || "[]")
  .filter(o => o.userEmail === user.email);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-10">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">👤 {user.name}</h1>
        <p className="text-gray-400 mb-2">Email: {user.email}</p>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg mt-4"
        >
          Logout
        </button>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📦 Order History</h2>
        {orders.length === 0 ? (
          <p className="text-gray-400">No previous orders.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((o, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">Order #{i + 1}</p>
                  <p className="text-sm text-gray-400">{o.date}</p>
                </div>
                <p className="text-green-400 font-medium">
                  ₹{o.total?.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
