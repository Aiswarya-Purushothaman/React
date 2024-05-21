import { useState } from 'react'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'
      >Vite with Tailwind</h1>
  <Card username='christy' post='asst'/>
  <Card username='bazil' post='junior'/>
  <Card username='able'/>
    </>
  )
}

export default App
