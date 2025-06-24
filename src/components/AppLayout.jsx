import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="lg:grid lg:grid-cols-[288px_1fr] lg:h-screen lg:overflow-hidden">

      {isOpen && <Backdrop onClick={toggleSidebar} hide="lg:hidden" />}
      <motion.div className="top-0 w-[70vw] z-20 fixed lg:hidden"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}>
        <Sidebar toggleSidebar={toggleSidebar} />
      </motion.div>

      <div className="hidden lg:block w-72">
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      <div className="overflow-y-auto">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout