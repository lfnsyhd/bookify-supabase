import { AiOutlineLoading } from 'react-icons/ai'

const SplashScreen = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50'>
      <div>
        <AiOutlineLoading size={50} color="#1ed760" className='animate-spin' />
      </div>
    </div>
  )
}

export default SplashScreen