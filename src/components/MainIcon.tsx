import { PiBookOpenUser } from 'react-icons/pi'
import { MainIconCompTypes } from '../types/main'

const MainIcon = (props: MainIconCompTypes) => {
  return (
    <div
      className='bg-white rounded-full flex items-center justify-center rotate-[15deg]'
      style={{
        width: props?.frameSize,
        height: props?.frameSize,
        boxShadow: props?.boxShadow ? "0 0 150px #fff" : ''
      }}
    >
      <PiBookOpenUser size={props?.iconSize} color='#121212' />
    </div>
  )
}

export default MainIcon