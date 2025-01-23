import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md"

const Sidebar = ({children}: {children: React.ReactNode}) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className='bg-[#121212] w-full md:w-[300px] h-fit max-h-[calc(100vh-20px)] rounded-xl text-white overflow-y-auto pt-5 pb-6 pl-7 pr-4 md:pr-none'>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-[4px]">Menu</span>
        <div
          className={`cursor-pointer transform transition-transform duration-200 ease-in-out ${!show && 'rotate-[-90deg]'}`}
          onClick={() => setShow(!show)}
        >
          <MdKeyboardArrowDown size={25} color="#a1a1a1" />
        </div>
      </div>
      <div className={`flex flex-col gap-3.5 mt-4 transition-all ease-in-out delay-150 duration-300 ${!show && 'hidden'}`}>
        {children}
      </div>
    </div>
  )
}

export default Sidebar