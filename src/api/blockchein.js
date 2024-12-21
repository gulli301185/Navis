import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getBlockcheinAsync = async () => {
  const { data } = await axiosInstance.get(API.blockchein);
  return data;
};
