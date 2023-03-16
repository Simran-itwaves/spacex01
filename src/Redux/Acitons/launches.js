import axios from "axios";
import { ENDPOINTS, BASE_URL } from "./ActionTypes";

export const API = axios.create({
  baseURL: BASE_URL,
});

export const fetchQueryLaunchesAPI = async (body) => {
  const res = await API.post(ENDPOINTS.QUERY_LAUNCHES, body);
  return res.data;
};

export const fetchOneLaunchAPI = async (id) => {
  const res = await API.get(ENDPOINTS.GET_ONE_LAUNCH + id);
  return res.data;
};
