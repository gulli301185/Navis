import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postRegistrationAsync = async (body) => {
  const { data } = await axiosInstance.post(API.register, body);
  return data;
};
