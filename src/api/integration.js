import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getIntegrationAsync = async () => {
  const { data } = await axiosInstance.get(API.integration);
  return data;
};
