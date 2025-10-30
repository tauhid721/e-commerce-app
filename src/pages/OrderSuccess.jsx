import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function OrderSuccess() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");
    if (saved) setOrder(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-10">
  <Motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="bg-gray-900 rounded-2xl shadow-lg p-8 text-center max-w-md w-full"
      >
        <div className="flex justify-center mb-4">
          <Motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center"
          >
            <span className="text-3xl">✅</span>
          </Motion.div>
        </div>

        <h1 className="text-2xl font-bold mb-3">Order Successful!</h1>
        <p className="text-gray-400 mb-6">
          Thank you {order?.info?.name ? order.info.name : "Customer"}! Your order has been placed successfully.
        </p>

        <div className="bg-gray-800 rounded-lg p-4 mb-6 text-left text-sm">
          <h2 className="font-semibold mb-2 text-gray-300">Order Summary</h2>
          <p><span className="text-gray-400">Phone:</span> {order?.info?.phone}</p>
          <p><span className="text-gray-400">Address:</span> {order?.info?.address}</p>
          <p><span className="text-gray-400">Payment:</span> {order?.info?.payment ? order.info.payment.toUpperCase() : "-"}</p>
          <p className="text-green-400 mt-2 font-medium">
            Total: ₹{order?.total?.toLocaleString()}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-medium transition-all duration-300"
          >
            View Profile
          </button>
        </div>
  </Motion.div>

      <p className="text-gray-500 mt-10 text-sm">
        A confirmation message has been saved locally. (Demo Mode)
      </p>
    </div>
  );
}
