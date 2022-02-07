import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../constants/common';
import { Activity } from '../models/activity';

axios.defaults.baseURL = baseUrl;

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  list: () => request.get<Activity[]>('/activities'),
  detail: (id: string) => request.get<Activity[]>(`/activities/${id}`),
  create: (activity: Activity) => request.post<void>('/activities', activity),
  edit: (activity: Activity, id: string) => request.put<void>(`/activities/${id}`, activity),
  delete: (id: string) => request.delete<void>(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
