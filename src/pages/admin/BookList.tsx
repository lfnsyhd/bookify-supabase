import UserLayout from '../../layouts/UserLayout';
import RecommendationBook from '../../components/BooksWidget';
import Button from '../../components/Button';
import { IoMdAdd } from 'react-icons/io';
import { useGeneralStore } from '../../stores/general';

const BookList = () => {
  const { setIsModalFormBookOpen, setModalFormBookAction } = useGeneralStore();

  const handleButton = () => {
    setIsModalFormBookOpen(true);
    setModalFormBookAction('add');
  }

  return (
    <>
      <UserLayout>
        <div>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold mb-2 text-white'>List Book</h1>
              <span className='text-sm text-gray-300'>See all our book datas here</span>
            </div>
            <div className='w-[130px]'>
              <Button
                onClicked={handleButton}
                class='!h-[30px] !text-[12px]'
              >
                <div className='flex items-center justify-center gap-2'>
                  <IoMdAdd size={20} color='#000' />
                  <span>Buat Baru</span>
                </div>
              </Button>
            </div>
          </div>
          <RecommendationBook showAll={true} isAdmin={true} />
        </div>
      </UserLayout>
    </>
  );
}

export default BookList