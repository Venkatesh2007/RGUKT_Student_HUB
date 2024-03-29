import "../App.css";
import React, { useContext } from "react";
import HubContext from "../context/HubContext";


export default function AssignmentsNF(props) {
  const context = useContext(HubContext);
  const { sidewidth} = context;
  

  return (
    <>
        <div
          className={`home nf ${
            (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
          }`}
        >
      <div className="anf">
        <div className="anft">{props.theme} Not Found</div>
        <i className="fa-solid fa-ban anfi" style={{color:"#f74b4b"}} ></i>
      </div>
        
      </div>

      
    </>
    );
}