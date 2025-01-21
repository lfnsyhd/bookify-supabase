import axios from "axios";

const usePostEditBook = async (id: number, title: string, author: string) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.put(`${import.meta.env.VITE_API_BOOK_URL}/${id}`,
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

export default usePostEditBook;