import React, {useContext,useRef} from 'react';
import '../App.css';
import data from '../context/List db.json'
import HubContext from '../context/HubContext'
//import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const {setUser} = useContext(HubContext);
  let user;
  const serachById=(id)=>{
    const usercheck= data.data.find((item)=>item.id===id)
    user=usercheck;
    return usercheck?1:0
  }
  const serachBypass=(pass)=>{
    const passcheck= data.data.find((item)=>item.password===pass)
    return passcheck?1:0
  }
  const context = useContext(HubContext);
  const {password, setPassword,username, setUsername,setLogin} = context;
  const recaptcha = useRef();
  const handleLogin = (e) => {
    e.preventDefault();

    if (serachById(username)&&serachBypass(password)) {
      setLogin(true);
      setUser(user);
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
      // const captchaValue = recaptcha.current.getValue();
      // if (!captchaValue) {
      //   alert("Please verify the reCAPTCHA!");
      // } else {
      //   // make form submission
      //   alert("Form submission successful!");
      // }
    
  };

  return (
    <>
      <div className="login">
        <h2 className="logtext">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="box">
            <label htmlFor="userid" className="label">Username</label>
            <input type="text" className="input" id="userid"  onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="box">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" className="input" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* <ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.REACT_APP_SITE_KEY} /> */}
          <button type="submit" className="btn btnlogin" >Log In</button>
          <button type="submit" className="btn btnpass">Lost Password</button>
        </form>
        <div className="tip">
          <p>Security Tip: Please use a STRONG password and change it regularly. Do not share your password with anyone.</p>
        </div>
      </div>
    </>
  );
}