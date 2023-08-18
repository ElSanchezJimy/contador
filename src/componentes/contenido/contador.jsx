import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); //para mantener el estado del contador.

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  // imprimir en fracion html
  return (
    <div className="App">
      <h1>Contador Simple</h1>
      <p>Valor del contador: {Contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default App;
