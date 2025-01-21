import { GrBook } from 'react-icons/gr';
import { useUser } from '../../context/user'
import UserLayout from '../../layouts/UserLayout';
import BoxWidget from '../../components/BoxWidget';
import { FaRegUser } from 'react-icons/fa';
import { LuHandCoins, LuHandshake } from 'react-icons/lu';

const AdminDashboard = () => {
  const { user } = useUser();
  return (
    <>
      <UserLayout>
        <div>
          <h1 className='text-2xl font-bold mb-2 text-white'>Hi, { user?.name?.split(' ')[0] } !</h1>
          <span className='text-sm text-gray-300'>Here is our summary for you</span>

          <div className='mt-4 grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-3'>
            <BoxWidget
              icon={<GrBook size={40} color='#FFF' />}
              title='Total Book'
              amount={3}
            />
            <BoxWidget
              icon={<FaRegUser size={40} color='#FFF' />}
              title='Total User'
              amount={3}
            />
            <BoxWidget
              icon={<LuHandshake size={40} color='#FFF' />}
              title='Total Lending'
              amount={3}
            />
            <BoxWidget
              icon={<LuHandCoins size={40} color='#FFF' />}
              title='Lending Active'
              amount={3}
            />
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default AdminDashboard