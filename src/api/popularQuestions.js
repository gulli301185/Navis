import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getPopularQuestionsAsynk = async ({ lang }) => {
  const { data } = await axiosInstance.get(API.question + "/" + lang);
  return data;
};
