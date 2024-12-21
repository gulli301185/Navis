import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postServiceAsync = async (body) => {
  const { data } = await axiosInstance.post(API.addService, body);
  return data;
};
