import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "cod",
  });

  // subtotal / discount / total calculation
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.1);
  const total = subtotal - discount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all required fields!");
      return;
    }

    // ✅ Create order object
    const newOrder = {
      id: Date.now(),
      ...formData,
      cart,
      total,
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    // ✅ Save to localStorage (order history)
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // ✅ Save last order separately
    localStorage.setItem("lastOrder", JSON.stringify(newOrder));

    // ✅ Clear cart after order
    if (typeof clearCart === "function") {
      clearCart();
    } else {
      console.warn("clearCart is not defined in CartContext");
    }

    // ✅ Redirect to order success page
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-10 px-6 flex flex-col lg:flex-row gap-8">
      {/* LEFT: Billing Form */}
      <div className="flex-1 bg-gray-900 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-3">
          Checkout Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Address</label>
            <textarea
              name="address"
              rows="3"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 outline-none"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Payment Method</label>
            <select
              name="payment"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 outline-none"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit / Debit Card</option>
              <option value="bkash">bKash</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 font-medium py-3 rounded-lg transition-all duration-300"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* RIGHT: Summary */}
      <div className="w-full lg:w-1/3 bg-gray-900 rounded-2xl p-6 shadow-lg h-fit">
        <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3">
          Order Summary
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span>৳{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-green-500">
            <span>Discount</span>
            <span>-৳{discount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Delivery</span>
            <span className="text-green-400">Free</span>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-5 pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-blue-200">৳{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
