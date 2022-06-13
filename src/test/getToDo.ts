import { AxiosError, AxiosResponse } from 'axios';
import { getData } from '../api/method';
import { TypeToDO } from '../type/toDo';

export default async function getToDO() {
  try {
    const response: AxiosResponse<TypeToDO> = await getData(
      'https://jsonplaceholder.typicode.com/tosdfdos/1'
    );
    console.log(response);
    return response;
  } catch (err: unknown) {
    console.log(err);
    return err as AxiosError;
  }
}
