import React from 'react'
import './Header.css';
import logo from '../../Assets/img/logo.png';
import arrow from '../../Assets/img/arrow.png';
<<<<<<< Updated upstream
=======
import {Link} from "react-router-dom";
>>>>>>> Stashed changes
function Header() {
  return (
    <header className='header'>
        <div className='headerLogoWrapper'>
            <img src={logo} alt=""  className='headerLogo'/>
            <span><Link to="/" >NFA</Link></span>    
        </div>
        <div className='linkss'>
          <ul className="headerNavList">
            <li>
              <img src={arrow} alt="not available"></img>
<<<<<<< Updated upstream
              <a href="">Features</a>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <a href="">Support</a>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <a href="">About</a>
=======
              <Link to="Features">Features</Link>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <Link to="Support">Support</Link>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <Link to="About">About</Link>
>>>>>>> Stashed changes
            </li>
          </ul>
          <div className="button">
            <button className='btt'>Sign up</button>
          </div>
        </div> 
    </header>
  )
}

export default Header