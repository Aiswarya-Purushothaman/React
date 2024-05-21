import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../src/store/FirebaseContext";
import Logo from "../../src/olx-logo.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");

  const [Error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    // setLoginError("");
    setError("")

    let isEmailValid;
    let isPasswordValid;


    if (!email.trim()) {
      setEmailError("Email is required");
    } else {
      isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isEmailValid) {
        setEmailError("Invalid email format");
      }
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
    } else {
      isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
      if (!isPasswordValid) {
        setPasswordError(
          "Password must be at least 8 characters long and contain at least one letter and one digit"
        );
      }
    }

    if (isEmailValid && isPasswordValid) {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        history.push("/");
      })
      .catch(err=>{
        console.log(err.code);
        if(err.code==='auth/invalid-credential'){
          setError("invalid user")
        }
      })
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname" style={{marginRight:"140px"}}>Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          {emailerror && (
            <span className="error" style={{ color: "red" }}>
              {emailerror}
            </span>
          )}
          <br />
          <label htmlFor="lname" style={{marginRight:"120px"}}>Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          {passworderror && (
            <span className="error" style={{ color: "red" }}>
              {passworderror}
            </span>
          )}
          <br />
          {Error && (
            <span className="error" style={{ color: "red" }}>
              {Error}
            </span>
          )}
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup" className="sign-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
