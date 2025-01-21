import { AiOutlineLoading } from 'react-icons/ai'

const SplashScreen = () => {
  return (
    <div className='w-full h-screen justify-center items-center'>
      <AiOutlineLoading size={50} color="#FFFFFF" className='animate-spin' />
    </div>
  )
}

export default SplashScreen