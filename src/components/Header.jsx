import React from 'react'
import {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import {AlignJustify, CircleUserRound} from "lucide-react"
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'
import {useLocation} from 'react-router-dom'

function Header({title}) {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname; //returns current path i.e. any one of the keys of titles object below
  const titles = {
    "/":"Dashboard",
    "/alljobs":"All Jobs",
    "/stats": "Stats"
  };

  const getTitle = ()=>titles[location]; //returns the value of the corresponding key from "titles" object
  
  function toggleSidebar(){
    setIsOpen((prev)=>!prev);
  }

  // 1. Disables scroll when the sidebar is opened.
  // 2. Adjusts the padding so as to avoid layot shift issue when sidebar is opened or closed
  useEffect(()=>{
    if(isOpen){
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    else{
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight= "0px";
    }
  },[isOpen]);

  useEffect(()=>{
    if(isOpen){
      toggleSidebar();
    }
  },[location]);


  return (
    <header className="w-full shadow shadow-black flex items-center">

      {/* Sidebar */}
          {isOpen && <Backdrop onClick={toggleSidebar} />}
          <motion.div className="top-0 w-[70vw] z-20 fixed"
            initial={{x:'-100%'}}
            animate={{x:isOpen?0:'-100%'}}
            transition={{type:'tween',duration:0.3}}>
            <Sidebar toggleSidebar={toggleSidebar} />
          </motion.div>

      {/* Navigation-header */}
      <div className="w-full flex justify-around items-center h-14">
        <div className="cursor-pointer" onClick={toggleSidebar}>
            <AlignJustify strokeWidth={4} size={24} />
        </div>

        <div className="flex h-full items-center">
            <h1 className="text-2xl font-bold w-[120px]">{getTitle()}</h1>
        </div>

        <div>
            <CircleUserRound size={30} />
        </div>
      </div>
    </header>
  )
}

export default Header