import { BoxWidgetCompTypes } from '../types/main'

const BoxWidget = (props: BoxWidgetCompTypes) => {
  return (
    <>
      <div className='w-full rounded-md min-h-[100px] bg-custom flex items-center gap-5 px-7'>
        <div>
          {props?.icon}
        </div>
        <div>
          <h4 className={`text-[10px] uppercase tracking-[3px] text-gray-300 w-fit mb-2.5 ${!props?.amount && 'animate-pulse bg-gray-200 text-transparent rounded-sm'}`}>{props?.title}</h4>
          <h1 className={`text-[#1ed760] text-[25px] p-0 m-0 leading-none font-bold w-[150px] ${!props?.amount && 'animate-pulse bg-gray-200 text-transparent rounded-sm'}`}>{props?.amount}</h1>
        </div>
      </div>
    </>
  )
}

export default BoxWidget