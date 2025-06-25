import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { House, LogOut, BookText, ChartNoAxesColumnIncreasing, X }
 from 'lucide-react';
function Sidebar({ toggleSidebar }) {
  return (
    <div>
        <nav className="bg-white text-zinc-900 w-full flex flex-col gap-8 p-4 h-screen">
          <div className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
            <X />
          </div>
          <Link to="/" className="pl-6 text-2xl font-semibold">Applyr</Link>
          <ul className="text-xl h-[60vh] flex flex-col gap-3 [&>*]:cursor-pointer [&>*]:rounded-2xl lg:text-lg font-medium">
            <li className="hover:bg-green-50">
              <NavLink to="/applyr/dashboard" className={({ isActive }) => `w-full p-4 flex items-center gap-2 rounded-2xl ${isActive ? "bg-green-50" : ""}`}>
                <House size={20} color="#34424E" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="hover:bg-emerald-50">
              <NavLink to="/applyr/alljobs" className={({ isActive }) => `w-full p-4 flex items-center gap-2 rounded-2xl ${isActive ? "bg-emerald-50" : ""}`}>
                <BookText size={20} color="#4A8F8D" />
                <span>All Jobs</span>
              </NavLink>
            </li>
            <li className="hover:bg-lime-50">
              <NavLink to="/applyr/stats" className={({ isActive }) => `w-full p-4 flex items-center gap-2 rounded-2xl ${isActive ? "bg-lime-50" : ""}`}>
                <ChartNoAxesColumnIncreasing size={20} color="#228B55" />
                <span>Stats</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="w-full p-4 flex items-center gap-2">
                <LogOut size={20} color="#1A1C23" />
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Sidebar