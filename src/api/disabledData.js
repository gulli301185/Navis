import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postDisabledDataAsync = async ({ body }) => {
  const { data } = await axiosInstance.post(API.disabled, body);
  return data;
};
export const postEnableDataAsync = async ({ body }) => {
  const { data } = await axiosInstance.post(API.enable, body);
  return data;
};
