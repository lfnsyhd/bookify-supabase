import { AiOutlineLoading } from 'react-icons/ai'
import MainIcon from './MainIcon'

const SplashScreen = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50'>
      <div className='animate-bounce'>
        <MainIcon frameSize={50} iconSize={30} boxShadow={true} />
      </div>
    </div>
  )
}

export default SplashScreen