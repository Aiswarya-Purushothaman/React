import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const addvalue=()=>{
setCount(count+1)
  }

  const removevalue=()=>{
    setCount(count-1)
  }

  return (
    <>
     <h1>counter value:{count}</h1>
     <div>
     <button style={{backgroundColor:'green'}} onClick={addvalue}>+</button>
     <button style={{backgroundColor:'green', marginLeft:"2px"}}  onClick={removevalue}>-</button>

     </div>
    </>
  )
}

export default App
