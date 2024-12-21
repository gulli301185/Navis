import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getNewsAsync = async ({ lang }) => {
  const { data } = await axiosInstance.get(API.news + "/" + lang);
  return data;
};
