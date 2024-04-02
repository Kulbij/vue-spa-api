import axios from "axios";
import router from "../router";
import { devURL, prodURL } from "@/../routes-config.yml";

let url = devURL;

if (process.env.NODE_ENV == "production") {
    url = prodURL;
}

const api = axios.create({
    baseURL: url,
    timeout: 10000
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        const lang = localStorage.getItem("lang");

        config.headers["Accept-Language"] = lang || "uk";

        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
      if (error.response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("step-employee");
          localStorage.removeItem("step-orders");
          localStorage.removeItem("isPayment");
          return Promise.reject(error);
      }

      if (error.response.status === 422 || error.response.status === 429) {
          return Promise.reject(error);
      }
  }
);

export default api;
