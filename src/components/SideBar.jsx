import React, { useContext } from 'react'
import HubContext from '../context/HubContext'
import { Link } from 'react-router-dom';

export default function SideBar() {
  const context = useContext(HubContext);
  const {sidewidth,login,user} = context;

  // if(sidewidth.width=='230px'){
  //   const display="block"
  // }
  return (
    <div className={`sidebar ${(sidewidth.width=='230px')&&'block'}`} style={sidewidth}>
      <div className='logobox1'>
        <img id="logo" src="https://hub.rgukt.ac.in/hub/static/images/logo.png" alt="logo"/>
        <p className={` nav-link1 ${(sidewidth.width=='73px')&&'display'} `}>RGUKT Stud Hub</p>
     </div>
      <ul>
        <div className='logoboxs'>
            <img id="logo" src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" alt="logo"/>
            <p className={`nav-link1 ${(sidewidth.width=='73px')&&'display'} `}>{`${user?user.name:"Name of std"}`}</p>
         </div>
        <hr/>
        <div className='logobox'>
          <i className="fa-sharp fa-solid fa-house"></i>
        <li className="hover"><Link to="/" className={`nav-link ${(sidewidth.width=='73px')&&'display'} display2`}>Home</Link></li>
        </div>
        <div className='logobox' id="student">
          <i className="fa-solid fa-user" style={{color: '#39d3f9'}} />
        <li className="hover"><Link to="/" className={`nav-link ${(sidewidth.width=='73px')&&'display'} display2`} id="studentname" >Student</Link></li>
        </div>
        <div className='logobox'>
          <i className="fa-solid fa-book" style={{color: '#01286a'}} />
        <li className="hover"><Link to={`${login?"/Assignments":"/"}`} className={`nav-link ${(sidewidth.width=='73px')&&'display'} display2`} >Assignments</Link></li>
        </div>
        <div className='logobox'>
          <i className="fa-solid fa-book" style={{color: '#6a0116'}} />
        <li className="hover"><Link to={`${login?"/Subjects":"/"}`} className={`nav-link ${(sidewidth.width=='73px')&&'display'} display2`} >Subject Pdf's</Link></li>
        </div>
        <div className='logobox'>
          <i className="fa-solid fa-newspaper" style={{color: '#022664'}} />
        <li className="hover"><Link to={`${login?"/QPsection":"/"}`}  className={`nav-link ${(sidewidth.width=='73px')&&'display'} display2`} >Question Papers</Link></li>
        </div>
        {/* <div className='logobox'>
          <i className="fa-solid fa-user" style={{color: '#025601'}} />
        <li className="hover"><a href="/" className={`nav-link ${(sidewidth.width=='73px')&&'display'} display2`} >Staff</a></li>
        </div> */}
      </ul>
    </div>
  )
}
