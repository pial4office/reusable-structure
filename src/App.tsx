import { useCallback, useState, useEffect } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [mount, setMount] = useState(false);

  return (
    <div className="App">
      {mount && <Child />}{' '}
      <button
        onClick={() => {
          setMount(!mount);
        }}
      >
        {mount ? 'unmount' : 'mount'}
      </button>
    </div>
  );
}

export default App;
