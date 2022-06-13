import axiosInstance from './axiosInstance';

export function getData<Type>(url: string): Type {
  return axiosInstance.get<Type>(url);
}
