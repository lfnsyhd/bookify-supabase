import useGetAllBorrowed from '../hooks/useGetAllBorrowed';
import moment from 'moment';
import Book from './Book';
import Button from './Button';
import { MdLibraryAddCheck } from 'react-icons/md';
import usePostReturnBook from '../hooks/usePostReturnBook';

const LendingsWidget = () => {
  const { data } = useGetAllBorrowed(null);

  return (
    <>
      <div className='mt-5 gap-3 rounded-xl overflow-hidden'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-custom">
            <tr>
              <th className='px-6 py-4 text-green-200 w-[10px]'>#</th>
              <th className='px-6 py-4 text-green-200'>Informasi Buku</th>
              <th className='px-6 py-4 text-green-200'>Peminjam</th>
              <th className='px-6 py-4 text-green-200'>Tgl. Mulai</th>
              <th className='px-6 py-4 text-green-200'>Tgl. Selesai</th>
              <th className='px-6 py-4 text-green-200'>Status</th>
              <th className='px-6 py-4 text-green-200'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 && data.map((res: any, index: number) => (
              <tr className='bg-custom text-white border-t border-green-200' key={index}>
                <td className='px-6 py-4 w-[10px]'>#{res?.id}</td>
                <td className='px-6 py-4'>
                  <Book
                    key={`book-` + index}
                    id={res?.Books?.id}
                    title={res?.Books?.title}
                    author={res?.Books?.author}
                    available={res?.Books?.available}
                    hideStatus={true}
                  />
                </td>
                <td className='px-6 py-4'>{res?.User?.name}</td>
                <td className='px-6 py-4'>{moment(res?.createdAt).format('YYYY-MM-DD HH:mm')}</td>
                <td className='px-6 py-4'>{moment(res?.dueDate).format('YYYY-MM-DD HH:mm')}</td>
                <td className='px-6 py-4'>
                  <span className='text-[12px] text-[#1ed760] font-bold'>
                    Sedang Dipinjam
                  </span>
                </td>
                <td className='px-4 py-4'>
                  <Button
                    class='!h-[30px] !text-[10px] !w-[120px] !text-black flex items-center justify-center gap-1'
                    onClicked={() => { usePostReturnBook(res?.id, res?.userId); window.location.reload() }}
                  >
                    <span>
                      <MdLibraryAddCheck size={20} color='#000' />
                    </span>
                    <span>
                      Kembalikan
                    </span>
                  </Button>
                </td>
              </tr>
            ))}

            {data && data.length == 0 && (
              <tr className='bg-custom text-white border-t border-green-200'>
                <td className='px-6 py-4 w-[10px] text-center text-[12px] font-bold text-red-300' colSpan={7}>
                  Belum ada data peminjam buku
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LendingsWidget