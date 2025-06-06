import React from 'react'
import {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import {AlignJustify, CircleUserRound} from "lucide-react"
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(isOpen){
      document.body.classList.add("overflow-hidden");
    }
    else{
      document.body.classList.remove("overflow-hidden");
    }
  },[isOpen]);

  function toggleSidebar(){
    setIsOpen((prev)=>!prev);
  }

  return (
    <header className="w-full bg-white shadow shadow-black flex items-center">

      {/* Sidebar */}
        <div className="h-auto">
          {isOpen && <Backdrop onClick={toggleSidebar} />}
          <motion.div className="absolute top-0 w-[70vw] z-20"
            initial={{x:'-100%'}}
            animate={{x:isOpen?0:'-100%'}}
            transition={{type:'tween',duration:0.3}}>
            <Sidebar toggleSidebar={toggleSidebar} />
        </motion.div>
        </div>

      {/* Navigation-header */}
      <div className="w-full flex justify-around items-center h-14">
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