import { AiOutlineLoading } from 'react-icons/ai'
import { ButtonCompTypes } from '../types/main'

const Button = (props: ButtonCompTypes) => {
  return (
    <button
      onClick={() => props?.onClicked()}
      disabled={props?.isLoading}
      className={`mt-2 bg-[#1ed760] w-full rounded-[30px] h-[45px] font-bold p-0 text-[14px] transition-all-300 ease-in-out hover:scale-[1.02] flex items-center justify-center text-center ` + props?.class}
    >
      {props?.isLoading && (
        <div className='mx-auto'>
          <AiOutlineLoading size={25} color="black" className='animate-spin' />
        </div>
      )}
      
      {!props?.isLoading && props?.children}
    </button>
  )
}

export default Button