import { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';

type TypeApiData = {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function ComponentOne() {
  const [data, setData] = useState<TypeApiData[]>();
  const { setLoading, loading } = useContext(LoaderContext);
  const fetchData = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  };

  return (
    <section className="b-danger m">
      <p>Component 1</p>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Fetch Data
      </button>
      {!loading ? (
        <div>
          {data?.map((current, index) => {
            if (index < 5) {
              return (
                <div>
                  <p>{current.id}</p>
                  <img src={current.thumbnailUrl} />
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
