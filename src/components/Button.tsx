import { ButtonCompTypes } from '../types/main'

const Button = (props: ButtonCompTypes) => {
  return (
    <button
      onClick={() => props?.onClicked()}
      className={`mt-2 bg-[#1ed760] w-full rounded-[30px] h-[45px] font-bold p-0 text-[14px] transition-all-300 ease-in-out hover:scale-[1.02] ` + props?.class}
    >
      {props?.children}
    </button>
  )
}

export default Button