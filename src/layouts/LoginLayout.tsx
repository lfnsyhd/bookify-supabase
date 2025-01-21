import React from 'react'

const LoginLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-gradient min-h-screen w-full mx-auto flex justify-center items-center'>
      <div className='w-full max-w-[700px] bg-[#121212] min-h-[300px] flex justify-center py-20 rounded-xl'>
        <div className='flex flex-col items-center min-w-[280px] gap-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginLayout