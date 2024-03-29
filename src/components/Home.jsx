import "../App.css";
import Login from "./Login";
import React, { useContext } from "react";
import HubContext from "../context/HubContext";
import Updates from "./Updates";
import { Link } from 'react-router-dom';

export default function Home() {
  const context = useContext(HubContext);
  const { sidewidth,toggleside} = context;
  // const empty = () => {};
  // const func=()=>{
  //   return sidewidth.width == "73px"?empty:toggleside;}
  // document.addEventListener("click",toggleside);
  // document.addEventListener('click',()=>{
  //   console.log('clicked')
  //   toggleside();
  // })
  return (
    <>
      <div
        className={`home homepage ${
          (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
        }`}
      >
        <div className="loginhead">
          <h4>Welcome!</h4>
          <div className="default hover">
            <i className="fa-solid fa-user" style={{ color: "#007bff" }} />
            <Link to="/" className="defaulttext ">
              Default
            </Link>
          </div>
        </div>
        <div className="loginholder">
          <Login />
          <Updates />
        </div>
      </div>
    </>
  );
}
