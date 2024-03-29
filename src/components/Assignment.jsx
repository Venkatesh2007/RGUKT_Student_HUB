import "../App.css";
import React, { useContext } from "react";
import Details from'./Details';
import HubContext from "../context/HubContext";


export default function Assignments() {
  const context = useContext(HubContext);
  const { sidewidth} = context;

  return (
    <>
      <div
        className={`home assignment ${
          (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
        }`}
      >
        <div className="assign-header">
          Assignments
        </div>
          <Details status="Assignments"/>
        </div>

    </>
  
  );
  }