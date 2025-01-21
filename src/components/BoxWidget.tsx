import { BoxWidgetCompTypes } from '../types/main'

const BoxWidget = (props: BoxWidgetCompTypes) => {
  return (
    <>
      <div className='w-full rounded-md min-h-[100px] bg-custom flex items-center gap-5 px-7'>
        <div>
          {props?.icon}
        </div>
        <div>
          <h4 className='text-[10px] uppercase tracking-[3px] text-gray-300'>{props?.title}</h4>
          <h1 className='text-[#1ed760] text-[25px] font-bold'>{props?.amount}</h1>
        </div>
      </div>
    </>
  )
}

export default BoxWidget