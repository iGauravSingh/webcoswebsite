import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";
import axios from "axios";

export const useGetWorkShops = () => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["workshops"],
    queryFn: () => {
      return axiosInstance.get<{
        result: { total: number; workshops: Event[] };
      }>("/workshop?page=1&limit=10");
    },
  });
};

export const useRegisterForWorkshop = () => {
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: (data: any) => {
      return axiosInstance.post("/students/workshop/register", data);
    },
  });
};
