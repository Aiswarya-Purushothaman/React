import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../src/assets/OlxLogo';
import Search from '../../src/assets/Search';
import Arrow from '../../src/assets/Arrow';
import SellButton from '../../src/assets/SellButton';
import SellButtonPlus from '../../src/assets/SellButtonPlus';
import  {AuthContext, FirebaseContext}  from '../../src/store/FirebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()

  return (
    <div  className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user  ? user.displayName:'Login'}</span>
          <hr />
          
        </div>
        {user && <span onClick={()=>{
          firebase.auth().signOut()
          history.push("/login")
        }}>Logout</span>}
 <div className="sellMenu">
      <SellButton />
      <div className="sellMenuContent">
        <SellButtonPlus />
        <span onClick={()=>{
          if (user) {
            history.push('/create');
          } else {
            history.push('/login');
          }
        }}>SELL</span>
      </div>
    
        </div>
      </div>
    </div>
  );
}

export default Header;
