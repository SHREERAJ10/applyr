import React from 'react'
import {NavLink} from 'react-router-dom'
import { House, LogOut, BookText, ChartNoAxesColumnIncreasing, X } from 'lucide-react';

function Sidebar({toggleSidebar}) {
  return (
    <>
        <nav className="bg-white shadow-md text-zinc-900 w-full flex flex-col gap-4 p-4 rounded-r-2xl h-screen">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <X />
          </div>
            <h2 className="text-2xl font-bold">Dashboard Menu</h2>
            <ul className="text-xl font-semibold h-[60vh] flex flex-col gap-3 [&>*]:cursor-pointer [&>*]:rounded-2xl">
                <li className="hover:bg-green-50">
                  <NavLink to="/" className={({isActive})=>`w-full p-4 flex items-center gap-2 ${isActive?"bg-green-50":""}`}>
                    <House size={20} color="#34424E" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="hover:bg-emerald-50">
                  <NavLink to="/alljobs" className={({isActive})=>`w-full p-4 flex items-center gap-2 ${isActive?"bg-emerald-50":""}`}>
                    <BookText size={20} color="#4A8F8D" />
                    <span>All Jobs</span>
                  </NavLink>
                </li>
                <li className="hover:bg-lime-50">
                  <NavLink to="/stats" className={({isActive})=>`w-full p-4 flex items-center gap-2 ${isActive?"bg-lime-50":""}`}>
                    <ChartNoAxesColumnIncreasing size={20} color="#228B55" />
                    <span>Stats</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/logout" className="w-full p-4 flex items-center gap-2">
                    <LogOut size={20} color="#1A1C23" />
                    <span>Logout</span>
                  </NavLink>
                </li>
            </ul>
        </nav>

    </>
  )
}

export default Sidebar