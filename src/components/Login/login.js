import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import vector1 from "..//..//Assets/img/Vector 1.png";
import { Link } from "react-router-dom";
import { Block } from "../block/Block";

export default function Login() {
  const navigate = useNavigate();
  const [nft, setNft] = useState();

  useEffect(() => {
    Block(2).then((data) => {
      setNft(data);
    });
  }, []);
  return (
    <div className="body-img">
      <div className="txt" style={{ color: "white", fontWeight: "bold" }}>
        <img className="topimg" src={vector1} alt="icon1" />
        NFA
      </div>
      <div className="main-body">
        <div>
          <h2 className="text-center pb-1">Login</h2>
          <p className="shade">choose an account to start with</p>
        </div>
        <div style={{ width: "90%" }}>
          <form className="form-val">
            <div className="form-group mb-3">
              <label className="h5  ml-3 mb-3">Username</label>
              <br />

              <select className="ml-3">
                {nft !== undefined &&
                  nft.map((element, i) => {
                    return (
                      <option key={i} value={element.tokenId}>
                        {element.tokenId}
                      </option>
                    );
                  })}
              </select>
            </div>
            <button
              disabled={!nft}
              className="signUp"
              type="submit"
              name="Submit"
              onClick={() => navigate("/Hero")}
            >
              <img src={vector1} alt="icon1" />
              <span className="pl-3">Login</span>
            </button>
          </form>
        </div>
        <p className="shade">
          Don't have an account?<Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
