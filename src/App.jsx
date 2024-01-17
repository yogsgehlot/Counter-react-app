import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);
  
  const addValue = () =>{
    if(counter<20)
    setCounter(counter+1)
  }

  const removeValue = () =>{
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
     
     <h1>Hello Yogi</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

