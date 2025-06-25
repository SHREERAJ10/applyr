import React from 'react'
import {useEffect} from 'react'
import {AlignJustify, CircleUserRound} from "lucide-react"
import {useLocation} from 'react-router-dom'

function Header({isOpen, toggleSidebar}) {

  const location = useLocation().pathname; //returns current path i.e. any one of the keys of titles object below
  const titles = {
    "/applyr/dashboard":"Dashboard",
    "/applyr/alljobs":"All Jobs",
    "/applyr/stats": "Stats"
  };

  const getTitle = ()=>titles[location]; //returns the value of the corresponding key from "titles" object

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


  //For autoclose of sidebar when navigated from one page to another
  useEffect(()=>{
    if(isOpen){
      toggleSidebar();
    }
  },[location]);


  return (
    <header className="w-full shadow shadow-black flex items-center bg-white">

      {/* Navigation-header */}
      <div className="w-full flex justify-between px-4 items-center h-14">

        {/* Hamburger Icon */}
        <div className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
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