import axiosInstance from './axiosInstance';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export async function getData<Type>(url: string) {
  const toastId = toast.loading('Loading...');
  try {
    const { data } = await axiosInstance.get<Type>(url);
    console.log(data);
    toast.dismiss(toastId);
    toast.success('Fetched successfuly');
    return data;
  } catch (err) {
    toast.dismiss(toastId);
    if (axios.isAxiosError(err)) {
      toast.error(err!.response!.data as string);
    }
    throw err;
  }
}
