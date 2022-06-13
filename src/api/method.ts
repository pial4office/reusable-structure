import axiosInstance from './axiosInstance';

export function getData<Type>(url: string) {
  return axiosInstance.get<Type>(url);
}
