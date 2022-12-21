import React from 'react'
import './Header.css';
import logo from '../../Assets/img/logo.png';
import arrow from '../../Assets/img/arrow.png';
function Header() {
  return (
    <header className='header'>
        <div className='headerLogoWrapper'>
            <img src={logo} alt=""  className='headerLogo'/>
            <span>NFA</span>    
        </div>
        <div className='linkss'>
          <ul className="headerNavList">
            <li>
              <img src={arrow} alt="not available"></img>
              <a href="">Features</a>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <a href="">Support</a>
            </li>
            <li>
              <img src={arrow} alt="not available"></img>
              <a href="">About</a>
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