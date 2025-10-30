import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * We fetch categories from FakeStoreAPI:
 * https://fakestoreapi.com/products/categories
 *
 * When rendering links we encode the category name in the URL:
 * /category/:categoryName
 *
 * For images we use a small mapping. You can replace the image URLs with your own.
 */

const categoryImages = {
  "electronics":
    "https://images.unsplash.com/photo-1510557880182-3d4d3b5f8b6c?auto=format&fit=crop&w=400&q=60",
  "jewelery":
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=400&q=60",
  "men's clothing":
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=60",
  "women's clothing":
    "https://images.unsplash.com/photo-1495121605193-b116b5b09a29?auto=format&fit=crop&w=400&q=60",
};

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-lg font-semibold">Shop by Category</h2>
        <p className="text-sm text-gray-500 mt-3">Loading categories...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-lg font-semibold">Shop by Category</h2>
        <p className="text-sm text-red-500 mt-3">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Shop by Category
      </h2>

      {/* horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-300">
        {categories.map((cat) => {
          const img = categoryImages[cat] || "https://via.placeholder.com/160";
          // encodeURIComponent to make URL safe (e.g. "men's clothing")
          const link = `/category/${encodeURIComponent(cat)}`;

          return (
            <Link
              to={link}
              key={cat}
              className="flex-shrink-0 w-32 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-md bg-white">
                <img
                  src={img}
                  alt={cat}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {cat}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
