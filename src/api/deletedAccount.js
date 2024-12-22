import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const deleteDeletedAccountAsync = async () => {
  const { data } = await axiosInstance.delete(API.delete);
  return data;
};
export const postLogoutAsync = async () => {
  const { data } = await axiosInstance.post(API.logout);
  return data;
};
