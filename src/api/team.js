import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getOurTeamAsync = async () => {
  const { data } = await axiosInstance.get(API.team);
  return data;
};
