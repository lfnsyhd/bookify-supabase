import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllBorrowed = (userId: number | null) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setError("");

    try {
      const params: any = {};

      if (userId) {
        params.userId = userId;
      }

      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_LENDING_URL}/borrowed`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params
      });

      setData(response.data);
    } catch (error) {
      setError('Data not found');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [userId]);

  return { data, loading, error };
}

export default useGetAllBorrowed;