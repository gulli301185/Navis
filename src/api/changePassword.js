import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postChangePassword = async (body) => {
  const { data } = await axiosInstance.post(API.changePassword, body);
  return data;
};

export const postForgotPassword = async (body) => {
  const { data } = await axiosInstance.post(API.forgotPassword, body);
  return data;
};
