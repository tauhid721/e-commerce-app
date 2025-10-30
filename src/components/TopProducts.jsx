//  API থেকে ডাটা ফেচ করার পরিবর্তে লোকাল ডাটা ব্যবহার করার জন্য কোড আপডেট করা হয়েছে। niche code deya ache
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { topProducts } from "../data/topProducts";
import { useCart } from "../context/CartContext";

export default function TopProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart, cart } = useCart();

  // সব category বের করি data থেকে
  const categories = ["All", ...new Set(topProducts.map((p) => p.category))];

  // category অনুযায়ী filter করা products
  const filteredProducts =
    selectedCategory === "All"
      ? topProducts
      : topProducts.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-gray-950 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Top Products</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-gray-400">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
                <Motion.div
                  key={product.id}
                  className="bg-gray-900 p-4 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + idx * 0.12,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                <div className="h-44 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.description}</p>

                {/* Rating */}
                <div className="flex mb-3 text-yellow-400">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-white">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm line-through ml-2">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  {cart && cart.find((c) => c.id === product.id) ? (
                    <button
                      disabled
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-not-allowed"
                    >
                      Added
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Add to cart
                    </button>
                  )}
                  </div>
                </Motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}






// src/components/TopProducts.jsx
// API থেকে ডাটা ফেচ করার জন্য পুরনো কোড নিচে দেওয়া হলো:
// import React, { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// export default function TopProducts() {
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const { addToCart, cart } = useCart();

//   // 🧠 Fetch Products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to load products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // 🔹 Category বের করা
//   const categories = ["All", ...new Set(products.map((p) => p.category))];

//   // 🔹 Filter করা products
//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   return (
//     <section className="bg-gray-950 text-white py-14 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Top Products</h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 selectedCategory === cat
//                   ? "bg-red-600 text-white"
//                   : "bg-gray-800 hover:bg-gray-700 text-gray-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Loading state */}
//         {loading ? (
//           <p className="text-gray-400">Loading products...</p>
//         ) : filteredProducts.length === 0 ? (
//           <p className="text-gray-400">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-gray-900 p-4 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex flex-col"
//               >
//                 <div className="h-44 flex items-center justify-center mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="max-h-full object-contain"
//                   />
//                 </div>

//                 <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
//                 <p className="text-gray-400 text-sm mb-2">{product.description}</p>

//                 {/* Rating */}
//                 <div className="flex mb-3 text-yellow-400">
//                   {"★".repeat(product.rating)}
//                   {"☆".repeat(5 - product.rating)}
//                 </div>

//                 <div className="mt-auto flex justify-between items-center">
//                   <div>
//                     <span className="text-xl font-bold text-white">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     <span className="text-gray-500 text-sm line-through ml-2">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   </div>

//                   {cart && cart.find((c) => c.id === product.id) ? (
//                     <button
//                       disabled
//                       className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-not-allowed"
//                     >
//                       Added
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
//                     >
//                       Add to cart
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
