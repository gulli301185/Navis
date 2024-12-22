import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getNewsDetailAsynk = async ({ slug }) => {
  const { data } = await axiosInstance.get(API.newsDetail + "/" + slug);

  return data;
};
