import { useState } from 'react';
// function Component() {
//   const [state, setState] = useState(initSate)

//   ...
// }
const  orders = [100, 200, 300]

function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)

    console.log(total)
    return total
  })

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
