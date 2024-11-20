import { useState } from 'react'


function App() {
  
    let [counter,setCounter ] = useState(15) 

    // let counter=5;
    const addValue = ()=>{
    // counter = counter +1;
    setCounter(counter+1); /* perform in batches for same functions so 1+4=5 will be updated*/
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    // setCounter(counter+1)
    console.log("value added",counter);
  }
  const decValue=()=>{
    counter=counter-1;
    setCounter(counter);
}
// useState will change all ocurrence of counter if chnaged
  return (
    <>
    
      <h1>Chai aur React : {counter}</h1>
      <h2> Counter Value:{counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Remove value </button>
    </>
  )
}

export default App
