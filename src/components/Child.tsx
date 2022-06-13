import { useEffect, useState } from 'react';
import getToDO from '../test/getToDo';
import { TypeToDO } from '../type/toDo';

export default function Child() {
  const [toDo, setToDo] = useState<TypeToDO>();

  async function getMyData() {
    const response = await getToDO<TypeToDO>();
    // console.table(response);
    if (response.name !== 'AxiosError') {
      console.log(response);
      setToDo(response);
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
