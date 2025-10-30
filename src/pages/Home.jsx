import React from 'react'
import { motion as Motion } from 'framer-motion'
import TopProducts from '../components/TopProducts'
import CategorySlider from '../components/CategorySlider'

function Home() {
  return (
    <div>
      <div className="min-h-[55vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
  <Motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Left side text */}
          <Motion.div
            className="text-center md:text-left px-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
              Shop the Best Products Online
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
              All categories, all brands, all in one place. Explore trending
              fashion, electronics, home essentials, and more.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-4 sm:px-0">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold shadow-lg"
              >
                Shop Now
              </Motion.button>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-5 py-3 rounded-lg font-semibold shadow-lg"
              >
                Explore Categories
              </Motion.button>
            </div>
          </Motion.div>

          {/* Right side image */}
          <Motion.div
            className="flex justify-center md:justify-end px-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="w-full max-w-md md:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
                alt="Shopping"
                className="rounded-2xl shadow-xl w-full h-auto max-h-[360px] object-cover"
              />
            </div>
          </Motion.div>
  </Motion.section>
      </div>

      <div className='bg-white dark:bg-gray-800 py-10'>
        {/* Category Slider */}
        <CategorySlider />
      </div>

      <div>
        <TopProducts />
      </div>
    </div>
  )
}

export default Home
