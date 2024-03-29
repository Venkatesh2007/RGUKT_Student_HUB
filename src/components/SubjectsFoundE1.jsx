import "../App.css";
import React, { useContext } from "react";
import UploadFile from "./UploadFile.jsx";
import HubContext from "../context/HubContext";


export default function SubjectsFE1() {
  const context = useContext(HubContext);
  const { sidewidth} = context;
  const articles=[];


  return (
    <>
        <div
          className={`home sf ${
            (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
          }`}
        >

        <div className='row'>
         
        <UploadFile/>
          {/* {articles.map((element) => {
            return <div>
            </div>}} */}
            
          
          </div>

          
      </div>
      
    </>
    );
}