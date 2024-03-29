import React, { useState } from 'react'
import HubContext from './HubContext'

const HubState =(props)=>{
 const [sidewidth,setsidewidth]=useState({width:"73px"})
 const [username, setUsername] = useState(0);
 const [password, setPassword] = useState('jkscndcnd');
 const [login,setLogin]=useState(false);
 const [user,setUser]=useState(null);
 const [drp,setDrp]=useState(false);
//  const [addside,setaddside]=useState(false);
  const toggledrp=()=>{
    if(drp){
      return setDrp(false);
    }
    return setDrp(true);
  }
  const toggleside=()=>{
    if(sidewidth.width=="73px"){
     return setsidewidth({width:"230px"})
    }
    // if(addside&&sidewidth.width=="230px")
    //   return setsidewidth({width:"73px"})
      setsidewidth({width:"73px"})
  }
  return(
    <HubContext.Provider value={{sidewidth,setsidewidth,toggleside,username,setUsername,password,setPassword,login,setLogin,user,setUser,drp,toggledrp}}>
      {props.children}
    </HubContext.Provider>
    )
}
export default HubState