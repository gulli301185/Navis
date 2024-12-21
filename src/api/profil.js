import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getProfileAsync = async () => {
  const { data } = await axiosInstance.get(API.profile);
  return data;
};

export const patchProfileAsync = async (body) => {
  const { data } = await axiosInstance.patch(API.profile, body);
  return data;
};
