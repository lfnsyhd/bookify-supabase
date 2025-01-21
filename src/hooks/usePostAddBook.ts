import axios from "axios";

const usePostAddBook = async (title: string, author: string) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${import.meta.env.VITE_API_BOOK_URL}`,
      {
        title,
        author
      },
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

export default usePostAddBook;