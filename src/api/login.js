import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postLoginAsync = async (body) => {
  const { data } = await axiosInstance.post(API.login, body);
  return data;
};
