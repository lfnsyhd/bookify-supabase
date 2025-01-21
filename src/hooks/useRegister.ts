import axios from "axios";

const useRegister = async (name: string, email: string, password: string, role: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_AUTH_URL}/register`, {
      name,
      email,
      password,
      role
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default useRegister;