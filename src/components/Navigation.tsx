import { useEffect, useState } from 'react'
import MainIcon from './MainIcon'
import { IoSearch } from 'react-icons/io5'
import { useUser } from '../context/user'
import { useLocation, useNavigate } from 'react-router-dom'
import routes from '../router/routes'
import { Link } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

const Navigation = () => {
  const { user } = useUser();
  const [keyword, setKeyword] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');

  useEffect(() => {
    if (title) {
      setKeyword(title);
    }
  }, [title]);

  const handleSearch = () => {
    if (keyword.length > 0) {
      return navigate(routes.explore + `?title=` + keyword);
    }
  }

  const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  }

  return (
    <div className='min-h-[45px] w-full mb-2 flex justify-between items-center md:px-7'>
      <div className='w-[300px]'>
        <MainIcon iconSize={20} frameSize={40} />
      </div>
      <div className='min-w-[430px] h-[45px] relative hidden md:block'>
        <input
          type='text'
          className='w-full outline-none bg-[#121212] h-[45px] rounded-[25px] px-[2rem] text-white transition-all ease-in-out duration-300 focus:border focus:border-[2.5px] focus:border-white text-[14px] border-[#121212] border-[2px]'
          placeholder='Buku apa yang ingin kamu cari?'
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          onKeyDown={handleOnEnter}
        />
        <button className='absolute right-[15px] top-[8px]' onClick={handleSearch}>
          <IoSearch size={25} color='#FFF' />
        </button>
      </div>
      <div className='w-[270px] h-[45px] flex justify-end items-center gap-3 relative'>
        <span className='text-[13px] text-white'>{user?.name}</span>
        <div
          className='bg-purple-300 rounded-full w-[30px] h-[30px] flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:brightness-[.7]'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className='uppercase font-semibold text-[14px]'>{user?.name?.toString().charAt(0)}</span>
        </div>
        {showDropdown && (
          <div className='bg-[#2a2a2a] w-[100px] h-fit py-2 pl-4 pr-3 absolute top-[2.8rem] rounded-md shadow-xl'>
            <Link to={routes.logout}>
              <div className='flex justify-between items-center'>
                <span className='text-white text-[12px] font-semibold'>Logout</span>
                <div>
                  <AiOutlineLogout size={15} color='#fff' />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation