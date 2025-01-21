import React from 'react'
import MainIcon from './MainIcon'

const HeaderLogin = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full flex flex-col gap-2.5 justify-center items-center mb-4'>
      <div className='bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center'>
        <MainIcon iconSize={30} frameSize={50} />
      </div>
      <h1 className='text-white font-bold text-[25px]'>{children}</h1>
    </div>
  )
}

export default HeaderLogin