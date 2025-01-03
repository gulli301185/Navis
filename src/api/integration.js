import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getIntegrationAsync = async () => {
  const { data } = await axiosInstance.get(API.integration);
  return data;
};
export const getIntegrationDetailAsync = async (id) => {
  const { data } = await axiosInstance.get(API.integration + "/" + id);
  return data;
};
export const postModerationAsync = async (id) => {
  console.log(id);

  const { data } = await axiosInstance.post(API.moderation + "/" + id);
  return data;
};
