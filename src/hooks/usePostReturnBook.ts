import axios from "axios";

const usePostReturnBook = async (lendingId: number, userId: number) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(`${import.meta.env.VITE_API_LENDING_URL}/return`,
      {
        lendingId,
        userId
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

export default usePostReturnBook;