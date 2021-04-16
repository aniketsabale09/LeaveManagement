import React, { createContext,useState,useEffect } from "react";

export const LoginContext = createContext();

function LoginContextProvider(props) {
  const [loginStatus, setLogInStatus] = useState(false);

  useEffect(() => {
    const currentUserLoginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    // alert(currentUserLoginStatus[0].loginStatus)
    // console.log('currentUserLoginStatus' +currentUserLoginStatus[0])
    if (currentUserLoginStatus==null || typeof currentUserLoginStatus=='undefined' ) {
      localStorage.setItem("loginStatus", JSON.stringify([{ loginStatus :false}]));
    }
    else{
        setLogInStatus(currentUserLoginStatus[0].loginStatus)
        alert('called '+currentUserLoginStatus[0].loginStatus)
    }
  }, [loginStatus]);

  const changeLoginStatus=(value)=>{
    alert('called changeloginStatus '+value)
setLogInStatus(value)
localStorage.setItem("loginStatus", JSON.stringify([{ loginStatus:value }]));

  }
  return (
    <LoginContext.Provider value={{ loginStatus ,changeLoginStatus}}>
      {props.children}
    </LoginContext.Provider>
    
  );
}

export default LoginContextProvider;
