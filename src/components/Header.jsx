import React from 'react'
import {useState} from 'react'
import Sidebar from './Sidebar'
import {AlignJustify, CircleUserRound} from "lucide-react"
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar(){
    setIsOpen((prev)=>!prev);
    console.log("test")
  }

  return (
    <header className="w-full bg-white h-14 shadow shadow-black flex items-center">

      {/* Sidebar */}
        <div>
          {isOpen && <Backdrop onClick={toggleSidebar} />}
          <motion.div className="absolute top-0 w-[70vw]"
            initial={{x:'-100%'}}
            animate={{x:isOpen?0:'-100%'}}
            transition={{type:'tween',duration:0.3}}>
            <Sidebar toggleSidebar={toggleSidebar} />
        </motion.div>
        </div>

      {/* Navigation-header */}
      <div className="w-full flex justify-around items-center">
        <div className="cursor-pointer" onClick={toggleSidebar}>
            <AlignJustify strokeWidth={4} size={24} />
        </div>

        <div className="flex h-full items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <div>
            <CircleUserRound size={30} />
        </div>
      </div>
    </header>
  )
}

export default Header