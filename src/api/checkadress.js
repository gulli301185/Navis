import { API } from "../utils/constants/api";
import axiosInstance from "../utils/helpers/axios";

export const getCheckadress = async (params) => {
  const { data } = await axiosInstance.get(
    `${API.checkadress}/${params.address}/${params.titleId}`
  );
  return data;
};
