import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md"
import { useGeneralStore } from "../stores/general";

const Sidebar = ({children}: {children: React.ReactNode}) => {
  const { isMenuOpen, setIsMenuOpen } = useGeneralStore();

  return (
    <div className='bg-[#121212] w-full md:w-[300px] h-fit max-h-[calc(100vh-20px)] rounded-xl text-white overflow-y-auto py-5 px-7 md:pr-none mt-2.5 md:mt-0'>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-[4px]">Menu</span>
        <div
          className={`relative right-[-5px] md:right-0 cursor-pointer transform transition-transform duration-200 ease-in-out ${!isMenuOpen && 'rotate-[-90deg]'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MdKeyboardArrowDown size={25} color="#a1a1a1" />
        </div>
      </div>
      <div className={`flex flex-col gap-3.5 mt-4 transition-all ease-in-out delay-150 duration-300 ${!isMenuOpen && 'hidden'}`}>
        {children}
      </div>
    </div>
  )
}

export default Sidebar