import '../App.css'
import React, { useContext, useEffect } from 'react'
import SideBar from './SideBar'
import HubContext from '../context/HubContext'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const context = useContext(HubContext);
  const {sidewidth,toggleside,login,toggledrp,drp} = context;
  // const change=useEffect(func,);
  const func=()=>{
    if(sidewidth.width=='230px'){
    document.body.addEventListener('click',toggleside)
  }}
  return (
    <>
      <div className="screen">
        <SideBar />
      <div className={`navbar-align ${((sidewidth.width=='73px')&&'nav-margin')||'nav-margin2'}`} style={{ backgroundColor: "#4267b2",color:"white"}}>
        <div className="navbar">
        <div className="hover">
          <i className="fa-solid fa-bars fa-lg nav-i" style={{ color: "#ffffff" }} onClick={toggleside}></i>
        </div>
          <ul className='d-flex'>
          <li className="hover nav-li"><Link to="/" className="nav-li mx-1 p-2">Home</Link></li>
            <li className="hover nav-li"><Link to={`${login?"/Student":"/"}`}className="nav-li mx-1 p-2">Student</Link></li>
            <li className="hover nav-li"><Link to={`${login?"/Assignments":"/"}`} className="nav-li mx-1 p-2">Assignments</Link></li>
            <li className="hover nav-li"><Link to={`${login?"/Subjects":"/"}`} className="nav-li mx-1 p-2">Subject Pdf's</Link></li>
            <li className="hover nav-li"><Link to={`${login?"/QPsection":"/"}`} className="nav-li mx-1 p-2">Question Papers</Link></li>

          </ul>
      </div>
      <div className="navbar-side hovers" onClick={toggledrp}>
        <div className="dropdown" >
          <i className="fa-solid fa-right-to-bracket nav-i" style={{color: '#fff'}} />
          <button  className="dropbtn" ><p>Log In</p></button>
          <div className="dropdown-content" style={{display:`${drp?"block":"none"}`}}>
            <Link to="/">
              <i className="fas fa-key mr-2"></i>
               Forgot Password?
            </Link>
            <Link to="/">
              <i className="fas fa-user mr-2"></i>
               Forgot Username?
            </Link>
            <Link to="/">
              <i className="fas fa-sign-in-alt"></i>
               Log In
            </Link>
            
          </div>
        </div>
      </div>
        </div>
        </div>
    </>
  )
}
