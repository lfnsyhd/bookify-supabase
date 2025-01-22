import { useEffect, useState } from 'react'
import { NavigationCompTypes } from '../types/main'
import MainIcon from './MainIcon'
import { IoSearch } from 'react-icons/io5'
import { useUser } from '../context/user'
import { useLocation, useNavigate } from 'react-router-dom'
import routes from '../router/routes'

const Navigation = () => {
  const { user } = useUser();
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');

  useEffect(() => {
    if(title) {
      setKeyword(title);
    }
  }, [title]);

  return (
    <div className='min-h-[45px] w-full mb-2 flex justify-between items-center px-7'>
      <div className='w-[300px]'>
        <MainIcon iconSize={20} frameSize={40} />
      </div>
      <div className='min-w-[430px] h-[45px] relative'>
        <input
          type='text'
          className='w-full outline-none bg-[#121212] h-[45px] rounded-[25px] px-[2rem] text-white focus:border focus:border-[2.5px] focus:border-white text-[14px] border-[#121212] border-[2px]'
          placeholder='Buku apa yang ingin kamu cari?'
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button className='absolute right-[15px] top-[8px]' onClick={() => navigate(`${routes?.explore}${keyword.length > 0 ? '?title=' : ''}${keyword}`)}>
          <IoSearch size={25} color='#FFF' />
        </button>
      </div>
      <div className='w-[270px] h-[45px] flex justify-end items-center gap-3'>
        <span className='text-[13px] text-white'>{user?.name}</span>
        <div className='bg-purple-300 rounded-full w-[30px] h-[30px] flex items-center justify-center'>
          <span className='uppercase font-semibold text-[14px]'>{user?.name?.toString().charAt(0)}</span>
        </div>
      </div>
    </div>
  )
}

export default Navigation