import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vector1 from "..//..//Assets/img/Vector 1.png";

import "./Register.css";
import { smartcall } from "../smartcall/smartcall";
//import data from "../graph/graph";

async function signUpButton(props) {
  return await smartcall(props);
}
// function signInButton()
// {

// }
export default function Register() {
  const navigate = useNavigate();
  const [tokenId, setTokenId] = useState();
  const [a, seta] = useState();
  return (
    <div className="body-img">
      <div className="txt" style={{ color: "white", fontWeight: "bold" }}>
        <img className="topimg" src={vector1} alt="icon1" />
        NFA
      </div>
      <div className="main-body">
        <div>
          <h2 className="text-center pb-1">Sign Up</h2>
          <p className="shade">create an account to continue</p>
        </div>
        <div>
          <div className="form-val">
            <div className="form-group mb-3">
              <label className="h5 mb-3">Username</label>
              <input
                name="token"
                type="text"
                className="form-control sizing1 input-box"
                placeholder="Enter Username here"
                onChange={(data) => {
                  setTokenId(data.target.value);
                }}
              />
            </div>
            <button
              className="signUp"
              type="submit"
              name="Submit"
              onClick={async () => {
                // signUpButton(tokenId);
                //console.log(tokenId);
                const ifcase = await signUpButton(tokenId);
                if (ifcase === 1) {
                  navigate("/Hero");
                } else {
                  alert("Error");
                }
              }}
            >
              <img src={vector1} alt="icon1" />
              <span className="pl-3">Sign up</span>
            </button>
          </div>
        </div>
        <p className="shade">
          Already have an account?<Link to="Login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
