import axios from "axios";

const useGetProfile = async (token: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_AUTH_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default useGetProfile;