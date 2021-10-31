import { useState } from 'react';
// function Component() {
//   const [state, setState] = useState(initSate)

//   ...
// }

function App() {
  const [counter, setCounter] = useState(1)
  function handleIncrease() {
    setCounter(counter + 1)
  }

  return (
    <div className="App" style={{padding : 20}}>
      <h1 >{counter}</h1>
      <button onClick={handleIncrease} >Increase</button>
    </div>
  );
}

export default App;
