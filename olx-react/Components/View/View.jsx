import React,{useEffect,useState,useContext} from 'react';
import { PostContext } from '../../src/store/postContext';
import './View.css';
import { FirebaseContext } from '../../src/store/FirebaseContext';
function View() {
const[userDetails,setUserDetails]=useState('')
const {postDetails}=useContext(PostContext)
const {firebase}=useContext(FirebaseContext)


useEffect(()=>{
  const {userId}=postDetails
firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  res.forEach(doc=>{
    setUserDetails(doc.data())
  })
})
},[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
  