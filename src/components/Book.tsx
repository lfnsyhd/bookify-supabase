import { BookCompTypes } from '../types/main'
import { AiOutlineRead } from 'react-icons/ai'
import { useUser } from '../context/user'
import { useGeneralStore } from '../stores/general'
import usePostDeleteBook from '../hooks/usePostDeleteBook'

const Book = (props: BookCompTypes) => {
  const { user } = useUser();
  let {
    isLendingOpen,
    setIsLendingOpen,
    setCurrentBook,
    setIsModalFormBookOpen,
    setModalFormBookAction,
  } = useGeneralStore();

  return (
    <div className='min-h-[60px] h-auto w-full bg-custom rounded-md flex overflow-hidden items-center'>
      <div className='min-h-[60px] h-auto min-w-[60px] bg-white rounded-tl-md rounded-bl-md flex items-center justify-center'>
        <AiOutlineRead size={30} color='#1ed760' />
      </div>
      <div className='px-4 py-0 flex flex-col flex-1'>
        <span className='text-white font-bold text-[12px] relative top-[-1.5px] truncate text-elipsis max-w-[calc(100%-15px)]'>{props?.title}</span>

        <div className='flex gap-1 items-center'>
          <small className='text-white text-[10px]'>
            <span className='font-bold'>Penulis: </span>
            {props?.author}
          </small>

          {props?.showBorrower && (
            <>
              <span className='text-white text-[10px]'>|</span>

              <small className='text-white text-[10px]'>
                <span className='font-bold'>Peminjam: </span>
                {props?.borrower}
              </small>
            </>
          )}
        </div>

        {props?.showBorrower && (
          <>
            <div className='flex gap-1 items-center'>
              <small className='text-white text-[10px]'>
                <span className='font-bold'>Tgl. Mulai: </span>
                {props?.startDate}
              </small>

              <span className='text-white text-[10px]'>|</span>

              <small className='text-white text-[10px]'>
                <span className='font-bold'>Tgl. Selesai: </span>
                {props?.dueDate}
              </small>
            </div>
          </>
        )}

        {props?.isAdmin && (
          <>
            <div className='flex gap-2 items-center mt-1'>
              <small
                className='text-yellow-500 text-[10px] cursor-pointer'
                onClick={() => { setIsModalFormBookOpen(true); setCurrentBook(props); setModalFormBookAction('edit')}}
              >
                <span className='font-bold'>Ubah </span>
              </small>

              <span className='text-white text-[8px]'>|</span>

              <small
                className='text-red-500 text-[10px] cursor-pointer'
                onClick={() => { usePostDeleteBook(props?.id); window.location.reload() }}
              >
                <span className='font-bold'>Hapus </span>
              </small>
            </div>
          </>
        )}
      </div>

      {user && user?.role == 'user' && props?.available && !props?.hideStatus && (
        <div className='pr-4 min-h-[60px] h-auto flex items-center'>
          <span
            className='text-[12px] text-[#1ed760] font-bold relative top-[-1px] hover:underline cursor-pointer'
            onClick={() => { setIsLendingOpen(isLendingOpen = !isLendingOpen); setCurrentBook(props) }}
          >
            Pinjam
          </span>
        </div>
      )}

      {user && !props?.available && !props?.showBorrower && !props?.hideStatus && (
        <div className='pr-4 min-h-[60px] h-auto flex items-center'>
          <span className='text-[12px] text-red-500 font-bold relative top-[-1px] cursor-not-allowed'>
            Tidak Tersedia
          </span>
        </div>
      )}

      {user && !props?.available && props?.showBorrower && !props?.hideStatus && (
        <div className='pr-4 min-h-[60px] h-auto flex items-center'>
          <span className='text-[12px] text-[#1ed760] font-bold relative top-[-1px]'>
            Sedang Dipinjam
          </span>
        </div>
      )}
    </div>
  )
}

export default Book