import { AiOutlineRead } from "react-icons/ai";

const BookLoading = () => {
  return (
    <div className='min-h-[60px] h-auto w-full bg-custom rounded-md flex overflow-hidden items-center'>
      <div className='min-h-[60px] h-auto min-w-[60px] bg-white rounded-tl-md rounded-bl-md flex items-center justify-center'>
        <AiOutlineRead size={30} color='#1ed760' />
      </div>
      <div className='px-4 py-0 flex flex-col flex-1'>
        <div className="w-[65%] h-[15px] bg-gray-200 animate-pulse rounded-sm mb-1">
          <span className='text-white font-bold text-[12px] relative top-[-1.5px] truncate text-elipsis max-w-[calc(100%-15px)]'>
          </span>
        </div>

        <div className='flex gap-1 items-center w-[35%] h-[15px] bg-gray-200 animate-pulse rounded-sm'>
          <small className='text-white text-[10px]'>
            <span className='font-bold'></span>
          </small>
        </div>
      </div>

      <div className='pr-4 max-w-[100px] flex-1 min-h-[60px] h-auto flex items-center'>
        <div className="w-full h-[15px] bg-gray-200 animate-pulse rounded-sm">
          <span
            className='text-[12px] text-[#1ed760] font-bold relative top-[-1px] hover:underline cursor-pointer'
          >
          </span>
        </div>
      </div>
    </div>
  )
}

export default BookLoading