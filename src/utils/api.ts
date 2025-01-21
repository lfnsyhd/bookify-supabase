import axios from 'axios';

export const verifyToken = async (token: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_AUTH_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};