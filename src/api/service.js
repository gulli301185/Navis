/* eslint-disable no-useless-catch */
import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const postServiceAsync = async (body) => {
  try {
    const { data } = await axiosInstance.post(API["add-service"], body);
    return data;
  } catch (error) {
    throw error;
  }
};
