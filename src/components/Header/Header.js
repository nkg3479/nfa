import React from 'react'
import './Header.css';
import logo from '../../Assets/img/logo.png';
import arrow from '../../Assets/img/arrow.png';
import {Link} from "react-router-dom";
import { useState } from 'react';
import Sign from '../Sign-in/Sign';
import Login from "../Login/login"
function Header() {
  const [pop,setPop]=useState(false);
  const [login,setLogin]=useState(true);
  return (<>
    <header className='header'>
        <div className='headerLogoWrapper'>
            <img src={logo} alt=""  className='headerLogo'/>
            <span><Link to="/">NFA</Link></span>    
        </div>
        <div className='linkss'>
          <ul className="headerNavList">
            <li>
              <img src={arrow} alt="not available"></img>
              <Link to="Features">Features</Link>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <Link to="Support">Support</Link>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <Link to="Connect">Connect</Link>
            </li>
          </ul>
          <div className="button">
          <button className='btt' href="#" onClick={()=>setPop(true)}>Sign up</button>
          </div>
          
        </div> 
    </header>
    {pop ? !login?<Sign showPop={pop} setPop={setPop} setLogin={setLogin} login={login}/>:<Login showPop={login} setPop={setLogin} />:null}
    </>
  )
}

export default Header