import "../App.css";
import React, { useContext } from "react";
import HubContext from "../context/HubContext";


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
          <div className="col">
            <div className="card " >
              <div className="container">
                <h4>
                 Question Papers
                  <br/>
                  Uploaded Soon...
                </h4>
              </div>
            </div>
          </div>
      </div>

        </div>

    </>
    );
}