import { GrBook } from 'react-icons/gr';
import { useUser } from '../../context/user'
import UserLayout from '../../layouts/UserLayout';
import BoxWidget from '../../components/BoxWidget';
import { FaRegUser } from 'react-icons/fa';
import { LuHandshake } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import useGetAllBooks from '../../hooks/useGetAllBooks';
import useGetAllUsers from '../../hooks/useGetAllUsers';
import useGetAllBorrowed from '../../hooks/useGetAllBorrowed';

const AdminDashboard = () => {
  const { user } = useUser();
  const [totalBook, setTotalBook] = useState<number>(0);
  const [totalUser, setTotalUser] = useState<number>(0);
  const [totalLending, setTotalLending] = useState<number>(0);

  const { data: booksData } = useGetAllBooks(null);
  const { data: usersData } = useGetAllUsers();
  const { data: borrowedData } = useGetAllBorrowed(null);

  const updateTotals = () => {
    setTotalBook(booksData?.length || 0);
    setTotalUser(usersData?.length || 0);
    setTotalLending(borrowedData?.length || 0);
  };

  useEffect(() => {
    if (booksData && usersData && borrowedData) {
      updateTotals();
    }
  }, [booksData, usersData, borrowedData]);

  return (
    <>
      <UserLayout>
        <div>
          <h1 className='text-2xl font-bold mb-2 text-white'>Hi, {user?.name?.split(' ')[0]} !</h1>
          <span className='text-sm text-gray-300'>Here is our summary for you</span>

          <div className='mt-4 grid lg:grid-cols-3 grid-cols-2 gap-3'>
            <BoxWidget
              icon={<GrBook size={40} color='#FFF' />}
              title='Total Book'
              amount={totalBook}
            />
            <BoxWidget
              icon={<FaRegUser size={40} color='#FFF' />}
              title='Total User'
              amount={totalUser}
            />
            <BoxWidget
              icon={<LuHandshake size={40} color='#FFF' />}
              title='Total Lending'
              amount={totalLending}
            />
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default AdminDashboard