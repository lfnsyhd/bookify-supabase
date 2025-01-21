import axios from "axios";

const usePostBorrowBook = async (userId: number, bookId: number) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${import.meta.env.VITE_API_LENDING_URL}/borrow`,
      {
        userId,
        bookId
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

export default usePostBorrowBook;