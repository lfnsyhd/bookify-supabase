import { useState, useEffect } from 'react';
import { verifyToken } from '../utils/api';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      verifyToken(token).then((profile: any) => {
        if (profile) {
          setUser(profile.user);
        } else {
          localStorage.removeItem('token');
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  return { user, loading };
};

export default useAuth;
