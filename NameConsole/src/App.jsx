import { useState } from "react";
import {useEffect} from 'react;'
import "./App.css";


function App() {
  const [name, setName] = useState("");
  const [api,setapi] = useState([])

const handleSubmit=(event)=>{
 event.preventDefault()
setapi([...api,{id:Date.now(),text:name,status:false}])
setName("")
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold"> Enter your Name</h1>
        <div className="m-5">
          <input type="text" className="border-4"  value={name} onChange={(e)=>{
            setName(e.target.value) 
          }} />
          <button className="bg-red-500 rounded-md p-1" type="submit" >Submit</button>
        </div>
      </form>
      <div>
        <h2 className="text-3xl m-3">Name list</h2>
        <ul>
       {api.map((item)=>{
        // reacts need
        return <li key={item.id}>{item.text}</li>
       })}
        </ul>
              </div>
    </>
  );
}

export default App;
