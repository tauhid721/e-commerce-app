import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './pages/layout/MainLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'


import { useState } from 'react'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccess from './pages/OrderSuccess'


function App() {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout এর ভেতরে সব page load হবে */}
        <Route
          path="/"
          element={<MainLayout onSearch={setSearchQuery} searchQuery={searchQuery} />}
        >
          <Route index element={<Home searchQuery={searchQuery} />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
           <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order-success' element={<OrderSuccess />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
