import React,{useEffect,useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from '../Pages/Login'
import Home from "../Pages/Home";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import Create from "../Pages/Create"
import View from "../Pages/ViewPost"
import Post from './store/postContext'

function App() {

  const {user,setuser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setuser(user)
  })
  })
  return (

    <Post>
       <Router>
      {/*       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} /> */}

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/create">
        <Create />
      </Route>
      <Route exact path="/view">
        <View />
      </Route>
      


    </Router>

    </Post>
   
  );
}

export default App;
