import { useUser } from '../../context/user'
import UserLayout from '../../layouts/UserLayout';
import RecommendationBook from '../../components/BooksWidget';

const UserDashboard = () => {
  const { user } = useUser();

  return (
    <>
      <UserLayout>
        <div>
          <h1 className='text-2xl font-bold mb-2 text-white'>Hi, { user?.name?.split(' ')[0] } !</h1>
          <span className='text-sm text-gray-300'>Here are some recommended books for you</span>
          <RecommendationBook />
        </div>
      </UserLayout>
    </>
  )
}

export default UserDashboard