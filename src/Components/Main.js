import React,{useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';
import { Link, Router,Route, BrowserRouter } from 'react-router-dom'
import Admin from './Admin';
import AdminHandle from './AdminHandle';
import Home from './Home';
import LeaveApplication from './LeaveApplication';
import Login from './Login';
import SignUp from './Signup'

 const Main = ()=>{
     const [logInStatus, setLogInStatus] = useState(false)
     const [flag,setFlag]=useState(true)
useEffect(() => {
  
        localStorage.setItem('loginStatus',JSON.stringify({flag:false}))
    
}, [flag])
    
   
    

    return(

        <BrowserRouter>
            <nav className="nav-wrapper">

                <div className="container" style={{height:"100%",width:"100%"}}>
                
                    
                    <Link to="/Home" className="left">HOME</Link>
                    <ul className="right">
                        {logInStatus ? <li><Link to="/Logout">Logout</Link></li>:<>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Signup">Signup</Link></li></>}
                        {/* <li><Link to="/admin">AdminLogin</Link></li> */}
                        {/* <li><Link to="/AdminHandle">DashBoard</Link></li> */}
                        {/* <li><Link to="/Admin">Dashboard</Link></li> */}
                        
                    </ul>
                   { /* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        
      /> */}
                </div>
            </nav> 

            <switch>
            <Route path='/Login' component={Login} />
            <Route path='/Signup' component={SignUp} />
            <Route path='/Home' component={Home}/>
             <Route path='/leaveapp/:id' component={LeaveApplication}/> 
             {/* <Route path='/leaveApplication' component={LeaveApplication}/>  */}
             <Route path='/admin' component={AdminHandle}/>
             {/* <Route path='/Admin' component={Admin}/>  */}

            </switch>
             
            </BrowserRouter>
    )
}

export default Main;
