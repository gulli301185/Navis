import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getTariffAsync = async () => {
  const { data } = await axiosInstance.get(API.tariff);
  return data;
};
