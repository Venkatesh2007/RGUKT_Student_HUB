import "../App.css";
import React, { useContext } from "react";
import HubContext from "../context/HubContext";
import Details from "./Details";


export default function Subject() {
  const context = useContext(HubContext);
  const { sidewidth} = context;
  return (
    <>
      <div
        className={`home subject ${
          (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
        }`}>
        <div className="assign-header">
          Subjects
        </div>
          <Details status="Subjects"/>
      </div>
    </>
  );
}
  