import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllUsers = () => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setError("");

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_AUTH_URL}/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
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
  }, []);

  return { data, loading, error };
}

export default useGetAllUsers;