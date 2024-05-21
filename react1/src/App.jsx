import { useState } from 'react'
import './App.css'

function App() {
const [count,setcounter]=useState(1)
                                             // let count=1
  const addValue=()=>{
    setcounter(count+2)
                                            // setcounter((prevcounter)=>{prevcounter+1})
                                            // setcounter((prevcounter)=>{prevcounter+1})
                                            // setcounter((prevcounter)=>{prevcounter+1})
                                             //  count=count+1
                                             //  console.log(count); 
  }
  const removevalue=()=>{
    setcounter(count-2)
                                               // count=count-1
                                               // console.log(count);
  }
  return (
    
    <>
    <h1>WELCOME TO REACT COURSE</h1>
    <h2>Counter value:{count}</h2>
    <button onClick={addValue}>Add value</button>{' '}
    <button onClick={removevalue}>Remove value</button>
    <p>Footer: </p>
    
    </>
  )
}

export default App
