import "../App.css";
import React from "react";
import { Link } from 'react-router-dom';

export default function Details(props) {

  return (
    <>
      <div className="puc">
        <div className="puc-header">
          <p>PUC</p>
        </div>
      <div className="p-cards">
        <div className="card p1">
          <img src="https://www.shutterstock.com/image-vector/puc-letter-logo-design-inspiration-260nw-2366127725.jpg" alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>PUC-1</b></Link>
            </h4>
          </div>
        </div>

        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/puc-letter-logo-design-inspiration-260nw-2366127725.jpg" alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>PUC-2</b></Link>
            </h4>
          </div>
        </div>
      </div>
      </div>
      <div className="engineering">
        <div className="puc-header">
          <p>Enginnering</p>
        </div>
        <div className="e-cards">
        <div className="card p2" >
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/Found/E1`}><b>E1S1</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E1S2</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E2S1</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E2S2</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E3S1</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E3S2</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E4S1</b></Link>
            </h4>
          </div>
        </div>
        <div className="card p2">
          <img src="https://www.shutterstock.com/image-vector/engineering-icon-created-glyph-style-260nw-1868891176.jpg" alt="Engineering" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <Link to={`/${props.status}/NotFound`}><b>E4S2</b></Link>
            </h4>
          </div>
        </div>
          </div>
      </div>
    </>
  );
}