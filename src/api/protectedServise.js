import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getProtectedServiceAsync = async ({ slug }) => {
  const { data } = await axiosInstance.get(API.servicesDetail + "/" + slug);
  console.log(data);

  return data;
};
