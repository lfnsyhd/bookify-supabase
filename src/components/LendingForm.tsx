import { useGeneralStore } from '../stores/general'
import { AiOutlineClose } from 'react-icons/ai';
import TextInput from './TextInput';
import moment from 'moment';
import Button from './Button';
import usePostBorrowBook from '../hooks/usePostBorrowBook';
import { useUser } from '../context/user';
import { useState } from 'react';

const LendingForm = () => {
  const { setIsLendingOpen, currentBook } = useGeneralStore();
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  let startDate = new Date();
  let dueDate = startDate.setDate(startDate.getDate() + 7);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await usePostBorrowBook(user?.user_id, currentBook?.id);
      window.location.reload();
    } catch (error: any) {
      alert(error?.response?.data?.message ? error?.response?.data?.message : 'Unknown error, try again later.');
    } finally {
      setIsLendingOpen(false);
      setLoading(false);
    }
  }

  return (
    <div className='fixed w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50 flex items-center justify-center'>
      <div className='relative bg-white w-full max-w-[470px] min-h-[25%] h-fit p-4 rounded-lg'>
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsLendingOpen(false)}
            className="p-1.5 rounded-full bg-gray-100"
          >
            <AiOutlineClose size="26" />
          </button>
        </div>
        <div className='mt-5 mb-4 text-center w-full'>
          <span className='text-[14px] text-center font-bold'>Apakah kamu yakin akan meminjam buku dengan detail berikut?</span>
        </div>
        <div className='flex flex-col gap-3 my-5'>
          <TextInput
            id='title'
            type='text'
            value={currentBook?.title}
            isLabel={true}
            label='Title'
            disabled={true}
            placeholder='Title'
            class='!text-gray-500 !bg-gray-100'
            labelClass='!text-black'
          />
          <TextInput
            id='author'
            type='text'
            value={currentBook?.author}
            isLabel={true}
            label='Author'
            disabled={true}
            placeholder='Author'
            class='!text-gray-500 !bg-gray-100'
            labelClass='!text-black'
          />
          <TextInput
            id='startDate'
            type='text'
            value={moment(startDate).format('YYYY-MM-DD HH:mm')}
            isLabel={true}
            label='Tgl. Mulai'
            disabled={true}
            placeholder='Tgl. Selesai'
            class='!text-gray-500 !bg-gray-100'
            labelClass='!text-black'
          />
          <TextInput
            id='dueDate'
            type='text'
            value={moment(dueDate).format('YYYY-MM-DD HH:mm')}
            isLabel={true}
            label='Tgl. Selesai'
            disabled={true}
            placeholder='Tgl. Selesai'
            class='!text-gray-500 !bg-gray-100'
            labelClass='!text-black'
          />
          <div className='w-[200px] mx-auto'>
            <Button
              onClicked={handleSubmit}
              isLoading={loading}
            >
              Ya, saya yakin
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LendingForm