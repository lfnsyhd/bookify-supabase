import React, { useEffect } from 'react'
import { useUser } from '../context/user'
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';
import { GoHome } from 'react-icons/go';
import SidebarMenu from '../components/SidebarMenu';
import { MdOutlineExplore } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrBook } from 'react-icons/gr';
import { menuUser, menuAdmin } from '../router/menus';
import { FaRegUser } from 'react-icons/fa';
import LendingOverlay from '../components/LendingOverlay';
import { useGeneralStore } from '../stores/general';
import { LuHandshake } from 'react-icons/lu';
import BookOverlay from '../components/BookOverlay';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const { setIsLendingOpen } = useGeneralStore();
  const { user } = useUser();
  const location = useLocation();

  const handleMenuActive = (value: string) => {
    return location?.pathname?.toString().includes(value) ? true : false;
  }

  const handleIcon = (value: string) => {
    switch (value) {
      case "dashboard":
        return <GoHome size={25} color='#121212' />
        break;

      case "explore":
        return <MdOutlineExplore size={25} color='#121212' />
        break;

      case "my-book":
        return <GrBook size={20} color='#121212' />
        break;

      case "logout":
        return <AiOutlineLogout size={23} color='#121212' />
        break;

      case "books":
        return <GrBook size={20} color='#121212' />
        break;

      case "users":
        return <FaRegUser size={19} color='#121212' />
        break;

      case "lendings":
        return <LuHandshake size={19} color='#121212' />
        break;

      default:
        return <GoHome size={25} color='#121212' />
        break;
    }
  }

  useEffect(() => {
    setIsLendingOpen(false);
  }, []);

  return (
    <>
      <LendingOverlay />
      <BookOverlay />
      <div className='p-[10px]'>
        <Navigation />

        <div className='flex gap-[10px]'>
          <Sidebar>
            {user && user?.role == 'user' && menuUser?.map(((menu: any, index: number) => (
              <SidebarMenu
                key={index}
                icon={handleIcon(menu?.isActive)}
                isActive={handleMenuActive(menu?.isActive)}
                to={menu?.to}
                text={menu?.text}
              />
            )))}

            {user && user?.role == 'admin' && menuAdmin?.map(((menu: any, index: number) => (
              <SidebarMenu
                key={index}
                icon={handleIcon(menu?.isActive)}
                isActive={handleMenuActive(menu?.isActive)}
                to={menu?.to}
                text={menu?.text}
              />
            )))}
          </Sidebar>
          <div className='bg-[#121212] min-h-[100px] h-fit flex-1 rounded-xl p-7'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLayout