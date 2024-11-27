import axios from "axios";

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  return { axiosInstance };
};
