import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Contador Simple</h1>
      <p>Valor del contador:</p> 
      <h1>{count}</h1>
      <button onClick={incrementCount}>Incrementar</button>
      <button onClick={decrementCount}>Decrementar</button>
    </div>
  );
}

export default App;
