import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllBooks = (title: string | null) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setError("");

    try {
      const params: any = {};

      if (title) {
        params.title = title;
      }

      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_BOOK_URL}`, {
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
  }, [title]);

  return { data, loading, error };
}

export default useGetAllBooks;