import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://aml.navisdevs.ru",
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config);

    const token = JSON.parse(localStorage.getItem("token") || "{}");

    config.headers = {
      "Content-Type": "application/json",
      ...config.headers,
    };

    if ("email" in token) {
      config.auth = { password: token.password, username: token.email };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
