import { AxiosError } from 'axios';
import axiosInstance from '../api/axiosInstance';
import { TypeToDO } from '../type/toDo';

export default async function getToDO<Type>(): Promise<Type | AxiosError> {
  try {
    const { data } = await axiosInstance.get<Type>(
      'https://jsonplaceholder.typicode.com/todsos/1'
    );
    console.log(data);
    return data;
  } catch (err: unknown) {
    console.log(err);
    return err as AxiosError;
  }
}
