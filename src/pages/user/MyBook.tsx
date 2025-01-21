import UserLayout from '../../layouts/UserLayout';
import BorrowedBook from '../../components/BorrowedBook';

const MyBook = () => {
  return (
    <>
      <UserLayout>
        <div>
          <h1 className='text-2xl font-bold mb-2 text-white'>My Book</h1>
          <span className='text-sm text-gray-300'>Explore What You’re Currently Reading</span>
          <BorrowedBook />
        </div>
      </UserLayout>
    </>
  )
}

export default MyBook