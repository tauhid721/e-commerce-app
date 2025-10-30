import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function MainLayout() {
  return (
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* এখানে Pages load হবে */}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
