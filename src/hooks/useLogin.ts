import axios from "axios";

const useLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_AUTH_URL}/login`, {
      email,
      password
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default useLogin;