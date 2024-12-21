import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getHistoryCheckaddressAsync = async () => {
  const { data } = await axiosInstance.get(API.history);
  return data;
};
