import React from 'react'
import { House, LogOut, BookText, ChartNoAxesColumnIncreasing, X } from 'lucide-react';

function Sidebar({toggleSidebar}) {
  return (
    <>
        <nav className="bg-white shadow-md text-zinc-900 w-full h-screen flex flex-col gap-4 p-4 rounded-r-2xl">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            <X />
          </div>
            <h2 className="text-2xl font-bold">Dashboard Menu</h2>
            <ul className="text-xl font-semibold h-[60vh] flex flex-col gap-3 [&>*]:cursor-pointer [&>*]:p-4 [&>*]:rounded-2xl">
                <li className="hover:bg-green-50">
                  <div className="flex items-center gap-2">
                    <House size={20} color="#34424E" />
                    <span>Dashboard</span>
                  </div>
                </li>
                <li className="hover:bg-emerald-50">
                  <div className="flex items-center gap-2">
                    <BookText size={20} color="#4A8F8D" />
                    <span>All Jobs</span>
                  </div>
                </li>
                <li className="hover:bg-lime-50">
                  <div className="flex items-center gap-2">
                    <ChartNoAxesColumnIncreasing size={20} color="#228B55" />
                    <span>Stats</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <LogOut size={20} color="#1A1C23" />
                    <span>Logout</span>
                  </div>
                </li>
            </ul>
        </nav>

    </>
  )
}

export default Sidebar