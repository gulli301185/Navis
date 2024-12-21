import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getPartnersAsync = async () => {
  const { data } = await axiosInstance.get(API.partners);
  return data;
};
