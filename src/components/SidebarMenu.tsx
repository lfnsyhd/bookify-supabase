import { useNavigate } from 'react-router-dom'
import { SidebarMenuCompTypes } from '../types/main'

const SidebarMenu = (props: SidebarMenuCompTypes) => {
  const navigate = useNavigate();

  return (
    <div
      className='flex gap-3.5 items-center cursor-pointer group'
      onClick={() => props?.to ? navigate(props?.to) : props?.onClicked }
    >
      <div className={`
        h-[40px] w-[40px] flex items-center justify-center rounded-md group-hover:bg-[#1ed760] transition-all ease-in-out duration-300
        ${props?.isActive ? 'bg-[#1ed760]' : 'bg-white'}
      `}>
        {props?.icon}
      </div>
      <span
        className={`group-hover:text-[#1ed760] transition-all ease-in-out duration-300 ${props?.isActive ? 'text-[#1ed760]' : 'text-white'}`}
      >
        {props?.text}
      </span>
    </div>
  )
}

export default SidebarMenu