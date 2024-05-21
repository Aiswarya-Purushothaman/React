import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(1)
  const [userData,setUserData]=useState(null)
  
const addcount=()=>{
  setCount(count+1)
 
}

const removecount=()=>{
  setCount(count-1)
}

useEffect(()=>{
  const fetchUserData=async ()=>{
    try {
      const response=await axios.get("https://jsonplaceholder.typicode.com/users")
      setUserData(response.data);
      console.log(response,'responawwwww')
      console.log(userData,'userdataaa');
      
    } catch (error) {
      console.log(error)
    }
  }
  fetchUserData();

},[])

  const user= userData ? userData.find(user=>user.id===count) :null;
console.log(user,'userrr')
  return (
    <>
    
    <div>
    <h1 className='text-5xl font-bold'>{count}</h1>
    </div>
      <div className='bg-amber-300 p-3 m-3'>
      <h1 className='text-4xl p-3 m-3'>{user? user.name :'name'}</h1>
      <p>{user ?user.email :'email'}</p>
    </div>
    
    
    
      <button className='bg-green-900 m-5 p-3 text-white' onClick={addcount}>+</button>
      <button className='bg-green-900 m-5 p-3  text-white' onClick={removecount}>-</button>
   
     
    </>
  )
}

export default App
