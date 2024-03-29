import "../App.css";
import React, { useContext } from "react";
import HubContext from "../context/HubContext";
import UploadFile from "./UploadFile";


export default function AssignmentsFE1() {
  const context = useContext(HubContext);
  const { sidewidth} = context;
  
  const articles=[];

  return (
    <>
        <div
          className={`home nf ${
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