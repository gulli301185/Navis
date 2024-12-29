import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postComplainAsync = async (body) => {
  const { data } = await axiosInstance.post(API.complain, body);
  return data;
};
