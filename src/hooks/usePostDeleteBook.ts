import axios from "axios";

const usePostDeleteBook = async (id: number) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`${import.meta.env.VITE_API_BOOK_URL}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default usePostDeleteBook;