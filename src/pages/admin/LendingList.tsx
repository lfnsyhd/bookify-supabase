import LendingsWidget from '../../components/LendingsWidget';
import UserLayout from '../../layouts/UserLayout';

const LendingList = () => {
  return (
    <>
      <UserLayout>
        <div>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold mb-2 text-white'>List Lending Book</h1>
              <span className='text-sm text-gray-300'>See all our lending books here</span>
            </div>
          </div>
          <LendingsWidget />
        </div>
      </UserLayout>
    </>
  );
}

export default LendingList