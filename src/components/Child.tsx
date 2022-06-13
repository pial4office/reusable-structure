import { useEffect, useState } from 'react';
import getToDO from '../test/getToDo';
import { TypeToDO } from '../type/toDo';
import { AxiosError } from 'axios';

export default function Child() {
  const [toDo, setToDo] = useState<TypeToDO>();

  async function getMyData() {
    const response = await getToDO<TypeToDO>();
    console.log(typeof response);
    if ((response as AxiosError).name !== 'AxiosError') {
      console.log(response);
      setToDo(response as TypeToDO);
      console.log('error not occured');
    } else {
      console.log(response);
      console.log('error occured');
    }
  }

  useEffect(() => {
    getMyData();
  }, []);
  return (
    <div>
      <h1>Child</h1>
      <pre>{JSON.stringify(toDo, null, '\t')}</pre>
    </div>
  );
}
