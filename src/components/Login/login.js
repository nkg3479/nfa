
import React from 'react';
import {useNavigate} from "react-router-dom"
import './Login.css';
import vector1 from '..//..//Assets/img/Vector 1.png'
import {Link} from "react-router-dom";
function signUpButton()
{

}
function signInButton()
{
  
}
export default function Login() {
  const navigate = useNavigate();
  return (
   
  <div className='body-img'>
    <div className='txt' style={{color:'white', fontWeight:'bold'}}><img className='topimg'  src={vector1} alt="icon1"/>NFA</div>
    <div className='main-body'> 
      <div>
        <h2 className='text-center pb-1'>Login</h2>
        <p className='shade'>choose an account to start with</p>
      </div>
      <div>
            <form className='form-val'>
                    <div className="form-group mb-3">
                      <label className='h5 mb-3'>Username</label>
                      <input type="text" className="form-control sizing1 input-box" placeholder="Enter Username here"/>
                    </div>
                    <button className="signUp" type="submit" name ="Submit" onClick={()=>navigate("Hero")}><img src={vector1} alt="icon1"/><span className='pl-3'>Login</span></button>
             </form>
      </div>
      <p className='shade'>Already have an account?<Link to="#">Sign In</Link></p>
    </div>
    </div>
  );
};