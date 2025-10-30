import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategorySlider = () => {
  const [index, setIndex] = useState(0);
  const visibleCount = 5; // একসাথে কয়টা দেখা যাবে

  // infinite smooth looping handle করার জন্য data duplicate
  const extendedCategories = [...categories, ...categories];

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 1 >= categories.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? categories.length - 1 : prev - 1
    );
  };

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center overflow-hidden relative">
      <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-700/60 hover:bg-gray-600 text-white p-2 rounded-full z-10 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-700/60 hover:bg-gray-600 text-white p-2 rounded-full z-10 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-8 justify-center"
          animate={{
            x: `-${index * (100 / visibleCount)}%`,
          }}
          transition={{
            duration: 1.5, // smoother duration
            ease: [0.45, 0, 0.55, 1], // custom cubic-bezier for natural feel
          }}
          style={{
            width: `${(extendedCategories.length / visibleCount) * 100}%`,
          }}
        >
          {extendedCategories.map((cat, i) => (
            <Link
              to={`/category/${cat.name.toLowerCase()}`}
              key={i}
              className="flex flex-col items-center w-1/5 group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-white bg-gray-700"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <p className="mt-3 text-sm capitalize font-medium group-hover:text-yellow-400 transition-colors duration-300">
                {cat.name}
              </p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySlider;
