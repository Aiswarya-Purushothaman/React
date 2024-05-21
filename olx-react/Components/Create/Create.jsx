import React, { Fragment,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../src/store/FirebaseContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  const {firebase}=useContext(FirebaseContext)
    const {user}=useContext(AuthContext)
    const history=useHistory()
const date=new Date()
  const handleSubmit=()=>{
    
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
       history.push("/")

      })

    })


  }
  return (
    <Fragment>
      
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname" style={{marginRight:"130px"}}>Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname" style={{marginRight:"110px"}}>Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname" style={{marginRight:"130px"}}>Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"  value={price}
              onChange={(e)=>setPrice(e.target.value)} />
            <br />
          
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):""}></img>
         
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }}  />
            <br />
            <button className="uploadBtn"  onClick={handleSubmit}>upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
