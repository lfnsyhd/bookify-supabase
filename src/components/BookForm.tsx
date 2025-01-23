import { useEffect, useState } from 'react'
import { useGeneralStore } from '../stores/general'
import { AiOutlineClose } from 'react-icons/ai';
import TextInput from './TextInput';
import Button from './Button';
import usePostAddBook from '../hooks/usePostAddBook';
import usePostEditBook from '../hooks/usePostEditBook';

const BookForm = () => {
  const { setIsModalFormBookOpen, currentBook, modalFormBookAction } = useGeneralStore();
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useEffect(() => {
    setTitle(modalFormBookAction == 'edit' ? currentBook?.title : '');
    setAuthor(modalFormBookAction == 'edit' ? currentBook?.author : '');
  }, [modalFormBookAction, currentBook]);

  const handleSubmit = async () => {
    try {
      if(modalFormBookAction == 'add') {
        await usePostAddBook(title, author);
      } else {
        await usePostEditBook(currentBook?.id, title, author);
      }

      window.location.reload();
    } catch (error: any) {
      alert(error?.response?.data?.message ? error?.response?.data?.message : 'Unknown error, try again later.');
    } finally {
      setIsModalFormBookOpen(false);
    }
  }

  return (
    <div className='fixed w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50 flex items-center justify-center'>
      <div className='relative bg-white w-full max-w-[470px] min-h-[25%] h-fit p-4 rounded-lg'>
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsModalFormBookOpen(false)}
            className="p-1.5 rounded-full bg-gray-100"
          >
            <AiOutlineClose size="26" />
          </button>
        </div>
        <div className='mt-2 mb-4 text-center w-full'>
          <span className='text-[20px] text-center font-bold capitalize'>{modalFormBookAction} Book</span>
        </div>
        <div className='flex flex-col gap-3 my-5'>
          <TextInput
            id='title'
            type='text'
            value={title}
            onUpdate={setTitle}
            onEnter={handleSubmit}
            isLabel={true}
            label='Title'
            placeholder='Title'
            class='!text-black bg-white'
            labelClass='!text-black'
          />
          <TextInput
            id='author'
            type='text'
            value={author}
            onUpdate={setAuthor}
            onEnter={handleSubmit}
            isLabel={true}
            label='Author'
            placeholder='Author'
            class='!text-black bg-white'
            labelClass='!text-black'
          />
          <div className='w-[200px] mx-auto'>
            <Button
              onClicked={handleSubmit}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookForm