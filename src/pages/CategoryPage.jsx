import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/Product";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const { addToCart, cart } = useCart();

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <section className="bg-[#050505] min-h-screen text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 capitalize text-center">
          {categoryName} Products
        </h1>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center">No products found.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((prod) => {
              const inCart = cart.find((item) => item.id === prod.id);
              return (
                <motion.div
                  key={prod.id}
                  variants={cardVariants}
                  className="bg-[#0f0f10] p-5 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all duration-500 flex flex-col items-center"
                >
                  <Link to={`/product/${prod.id}`} className="w-full">
                    <div className="h-52 flex justify-center items-center mb-4">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="max-h-full object-contain"
                      />
                    </div>

                    <h3 className="text-lg font-semibold mb-1 text-center">
                      {prod.name}
                    </h3>
                    <p className="text-gray-400 text-sm text-center mb-3">
                      {prod.description || "Industry-leading noise cancellation headphones"}
                    </p>
                  </Link>

                  {/* Rating */}
                  <div className="flex text-yellow-400 mb-3">
                    {"★".repeat(prod.rating || 4)}
                    {"☆".repeat(5 - (prod.rating || 4))}
                  </div>

                  {/* Price section */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <div>
                      <span className="text-xl font-bold text-white">
                        ₹{prod.price.toLocaleString()}
                      </span>
                      {prod.oldPrice && (
                        <span className="text-gray-500 text-sm line-through ml-2">
                          ₹{prod.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => !inCart && addToCart(prod)}
                      disabled={inCart}
                      className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        inCart
                          ? "bg-green-700 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      {inCart ? "Added ✓" : "Add to cart"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
