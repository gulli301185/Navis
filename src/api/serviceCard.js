import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getServiceCardAsync = async ({ lang }) => {
  const { data } = await axiosInstance.get(API.services + "/" + lang);
  return data;
};
