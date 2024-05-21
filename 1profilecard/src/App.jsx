import { useState } from 'react'

import './App.css'
import ProfileCard from './profilecard'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>ProfileCard</h1>
    <ProfileCard Name='vrishab' email='vrishab@gmail.com'/> 
    <ProfileCard Name='abhi' email='abhi@gmail.com'/> 
    <ProfileCard  /> 
    </>
    
  )
}

export default App
