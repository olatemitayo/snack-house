import { cookieStorage } from "@ibnlanre/portal";
import axios from "axios";
import { toast } from "react-toastify";

// axios instance
export const AUTHAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
export const SAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// testing
export const USERAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_URL,
});

// axios interceptors
API.interceptors.request.use(
  (req) => {
    let token = cookieStorage.getItem("sh_auth");
    if (token) {
      const userToken = JSON.parse(token) as { access: string };
      req.headers.Authorization = `Bearer ${userToken?.access}`;
    }
    return req;
  },
  (error) => {
    toast.error("something went wrong");
    Promise.reject(error);
  }
);
