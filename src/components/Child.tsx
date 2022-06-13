import { useEffect, useState } from 'react';
import getToDO from '../test/getToDo';
import { TypeToDO } from '../type/toDo';
import { AxiosError } from 'axios';
import { getData } from '../api/method';

export default function Child() {
  const [toDo, setToDo] = useState<TypeToDO>();

  async function getMyData() {
    const response = await getData<TypeToDO>(
      'https://jsonplaceholder.typicode.com/toodos/1'
    );
    if ((response as AxiosError).name !== 'AxiosError') {
      // setToDo(response as TypeToDO);
    }
  }

  useEffect(() => {
    getMyData();
  }, []);
  return (
    <div>
      <h1>Child</h1>
      {/* <pre>{JSON.stringify(toDo, null, '\t')}</pre> */}
    </div>
  );
}
