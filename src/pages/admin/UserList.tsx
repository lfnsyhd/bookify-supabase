import UsersWidget from '../../components/UsersWidget';
import UserLayout from '../../layouts/UserLayout';

const UserList = () => {
  return (
    <>
      <UserLayout>
        <div>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold mb-2 text-white'>List User</h1>
              <span className='text-sm text-gray-300'>See all our user datas here</span>
            </div>
          </div>
          <UsersWidget />
        </div>
      </UserLayout>
    </>
  );
}

export default UserList