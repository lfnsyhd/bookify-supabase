import { AiOutlineLoading } from 'react-icons/ai';
import useGetAllUsers from '../hooks/useGetAllUsers';
import moment from 'moment';

const UsersWidget = () => {
  const { data, loading } = useGetAllUsers();

  return (
    <>
      <div className='mt-5 gap-3 rounded-xl overflow-x-auto max-h-[300px] md:max-h-none'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-custom">
            <tr>
              <th className='px-6 py-4 text-green-200 w-[10px]'>#</th>
              <th className='px-6 py-4 text-green-200'>Nama</th>
              <th className='px-6 py-4 text-green-200'>Email</th>
              <th className='px-6 py-4 text-green-200'>Tgl. Registrasi</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={4}>
                  <div className='w-full mx-auto text-center flex items-center justify-center gap-3 h-[55px] bg-custom'>
                    <div>
                      <AiOutlineLoading size={15} color="#fff" className='animate-spin' />
                    </div>
                    <span className='text-white'>Tunggu sebentar</span>
                  </div>
                </td>
              </tr>
            )}

            {data && data?.length > 0 && data?.map((res: any, index: number) => (
              <tr className='bg-custom text-white border-t border-green-200' key={index}>
                <td className='px-6 py-4 w-[10px]'>#{res?.id}</td>
                <td className='px-6 py-4'>{res?.name}</td>
                <td className='px-6 py-4'>{res?.email}</td>
                <td className='px-6 py-4'>{moment(res?.createdAt).format('YYYY-MM-DD HH:mm')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersWidget