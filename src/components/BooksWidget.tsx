import Book from './Book'
import useGetAllBooks from '../hooks/useGetAllBooks';
import BookLoading from './BookLoading';

type Props = {
  title?: string | any;
  showAll?: boolean;
  isAdmin?: boolean;
}

const BooksWidget = ({title, showAll, isAdmin}: Props) => {
  const { data, loading } = useGetAllBooks(title);
  const slicedData = data ? data.slice(0,6) : [];
  const finalData = showAll ? data : slicedData;

  return (
    <>
      <div className='mt-5 grid lg:grid-cols-2 grid-cols-1 gap-3'>
        {loading && <BookLoading />}
        {data && data?.length > 0 && finalData.map((res: any, index: number) => (
          <Book
            key={index}
            id={res?.id}
            title={res?.title}
            author={res?.author}
            available={res?.available}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </>
  )
}

export default BooksWidget