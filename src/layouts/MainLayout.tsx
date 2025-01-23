import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div className='bg-black min-h-screen'>
        {loading ? <SplashScreen /> : children}
      </div>
    </>
  )
}

export default MainLayout