import { useState } from 'react'
import { TextInputCompTypes } from '../types/main'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const TextInput = (props: TextInputCompTypes) => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className='flex flex-col w-full gap-1 relative'>
      {props?.isLabel && (<label htmlFor={props?.id} className={`text-white text-[14px] font-semibold ` + props?.labelClass}>{props?.label}</label>)}
      <input
        disabled={props?.disabled ? props?.disabled : false}
        id={props?.id}
        type={props?.isToggle && !show ? "text" : props?.type}
        placeholder={props?.placeholder}
        value={props?.value || ''}
        autoComplete='off'
        onChange={(event) => props?.onUpdate && props?.onUpdate(event.target.value)}
        className={`bg-transparent p-3 border-box-shadow focus:border rounded-sm text-white outline-none text-[13px] ` + props?.class + (props?.disabled && ' cursor-not-allowed')}
      />

      {props?.isToggle && (
        <div
          className='absolute top-[1.745rem] right-[2px] cursor-pointer p-3'
          onClick={() => setShow(!show)}
        >
          {show ?
            <FaRegEyeSlash size={15} color='#FFFFFF' /> :
            <FaRegEye size={15} color='#FFFFFF' />
          }
        </div>
      )}
    </div>
  )
}

export default TextInput