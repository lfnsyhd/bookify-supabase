import { useState } from 'react'
import UserLayout from '../layouts/UserLayout'
import { useLocation } from 'react-router-dom';
import RecommendationBook from '../components/BooksWidget';

const Explore = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryTitle = queryParams.get('title');
  const [title] = useState<string>(queryTitle || '');

  return (
    <>
      <UserLayout>
        <div>
          <h1 className='text-2xl font-bold mb-2 text-white'>Explore</h1>
          <span className='text-sm text-gray-300'>{title ? 'Here is your search result' : 'Your next favorite book is just a click away' }</span>
          <RecommendationBook title={title} />
        </div>
      </UserLayout>
    </>
  )
}

export default Explore