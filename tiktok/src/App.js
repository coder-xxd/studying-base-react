import { useState } from 'react';
// function Component() {
//   const [state, setState] = useState(initSate)

//   ...
// }
const  orders = [100, 200, 300]

function App() {
  // useState dung voi callback
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    console.log(total)
    return total
  })

  function handleIncrease() {
    setCounter(counter + 1)
  }

  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Nha Trang'
  })
  function handleUpdate() {
    setInfo({
      ...info,
      name: 'Danny Nguyen',
      bio:'Love basketball and money ^^'
    })
  }

  return (
    <div className="App" style={{padding : 20}}>
      <h1 >{counter}</h1>
      <button onClick={handleIncrease} >Increase</button>
      <h1 >{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate} >Update</button>
    </div>
  );
}

export default App;
