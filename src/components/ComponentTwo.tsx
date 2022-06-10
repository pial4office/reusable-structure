import { useEffect } from 'react';

export default function ComponentTwo() {
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="b-warn m">
      <p>Component 2</p>
      <button>Fetch Data</button>
    </section>
  );
}
