import { useState } from 'react';
import './App.css';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}

export default App;
