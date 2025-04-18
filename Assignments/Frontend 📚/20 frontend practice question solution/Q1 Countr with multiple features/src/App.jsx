import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount(prev => prev + 1)
  }

  const decrement = ()=>{
    setCount(prev => prev - 1)
  }
  return (
    <>
    <h1 className='text-center'>Cunter App </h1>
    <div className="flex items-center justify-center">
       <p className="text-red-500">{count}</p>
       <div className="flex p-10 gap-10">
        <button onClick={increment}>INCREMENT +</button>
        <button  onClick={decrement}>DECREMENT -</button>
       </div>
    </div>
    </>
  )
}

export default App
