import React ,{useState,useContext} from 'react';

import Logo from '../../src/olx-logo.png';
import './Signup.css';
import {FirebaseContext} from '../../src/store/FirebaseContext'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Signup() {
  const history=useHistory()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [usernameError,setUsernameError]=useState('')
  const [emailError,setEmailError]=useState('')
  const [phoneError,setPhoneError]=useState('')
  const [passwordError,setPasswordError]=useState('')


const { firebase}=useContext(FirebaseContext)

 const handleSubmit=(e)=>{
  e.preventDefault()

  setUsernameError('')
  setEmailError('')
  setPhoneError('')
  setPasswordError('')

  let isValid=true

  if (!/^[A-Za-z]+$/.test(username)) {
    setUsernameError(' enter valid Username ');
    isValid = false;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    setEmailError('Please enter a valid email address');
    isValid = false;
  }
  if (!/^\d{10}$/.test(phone)) {
    setPhoneError('Please enter a valid 10-digit phone number');
    isValid = false;
  }
  if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
    setPasswordError('Password should contain alphabets, digits, and be at least 8 characters long');
    isValid = false;
  }





  if(isValid){
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      // alert(result)
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
          
        }).then(()=>{
          history.push('/login')
  
        })
      })
    })
.catch((error)=>{
  console.error(error)
})
  }
console.log(username)
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname" style={{ marginRight: '100px' }}>Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          {usernameError && <span className='error' style={{color:"red"}}>{usernameError}</span>}
         <br/>
              <label htmlFor="fname" style={{ marginRight: '130px' }}>Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          {emailError && <span className='error' style={{color:"red"}}>{emailError}</span>}
         <br/>
          <label htmlFor="lname" style={{ marginRight: '130px' }}>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          {phoneError && <span className='error' style={{color:"red"}}>{phoneError}</span>}
          <br/>
          <label htmlFor="lname" style={{ marginRight: '100px' }}>Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br/>
          {passwordError && <span className='error' style={{color:"red"}}>{passwordError}</span>}
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login" className="login-link">Login</Link>
      </div>
    </div>
  );
}
