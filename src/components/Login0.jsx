import '../App.css'
// import HubState from '../context/HubState'


export default function Login() {
  return (
    <>
      <div className="login">
        <h2 className="logtext">Log In</h2>
        <form>
          <div className="box">
            <label htmlFor="userid" className="label">Username</label>
            <input type="text" className="input" id="userid" />
          </div>
          <div className="box">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" className="input" id="password" />
          </div>
          <div className="box">
            <label htmlFor="verify" className="label">Verify:</label>
            <input type="password" className="input" id="verify" />
          </div>
          <button type="submit" className="btn btnlogin">Log In</button>
          <button type="submit" className="btn btnpass">Lost Password</button>
        </form>
        <div className="tip">
          <p>Security Tip: Please use STRONG password and change once in a month and don't share password to any one...</p>
        </div>
      </div>
    </>
  )
}
