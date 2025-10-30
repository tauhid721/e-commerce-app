import React from 'react'
import { useCart } from '../context/CartContext'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate();

  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();

   // Total calculation
  const totalOriginal = cart.reduce((sum, item) => sum + item.price * item.quantity * 1.5, 0); // ধরলাম 1.5x ছিল পুরনো দাম
  const totalDiscount = totalOriginal - cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalFinal = totalOriginal - totalDiscount;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row gap-8 px-6 py-10">
      {/* LEFT SIDE - Product List */}
      <div className="flex-1 bg-gray-900 rounded-2xl shadow-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-3">
          Shopping Cart ({cart.length} items)
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400 mb-4">Your cart is empty 😢</p>
            <Link
              to="/"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b border-gray-800 pb-6"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain bg-gray-800 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-base md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      ₹{item.price.toLocaleString()}{" "}
                      <span className="line-through text-gray-500 ml-2">
                        ₹{Math.round(item.price * 1.5).toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md"
                  >
                    +
                  </button>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 md:mt-0 text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE - Order Summary */}
      {cart.length > 0 && (
        <div className="w-full md:w-1/3 bg-gray-900 rounded-2xl shadow-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3">
            Order Summary ({cart.length} items)
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Original Price</span>
              <span>₹{Math.round(totalOriginal).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-green-500">
              <span>Discount</span>
              <span>-₹{Math.round(totalDiscount).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Delivery</span>
              <span className="text-green-400">Free</span>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-5 pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Price</span>
              <span className="text-blue-200">₹{Math.round(totalFinal).toLocaleString()}</span>
            </div>

            <button
  onClick={() => navigate("/checkout")}
  className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
>
  Checkout
</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
