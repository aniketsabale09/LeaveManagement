import React, { useContext } from 'react'
import { BrowserRouter ,Route,Switch,Link} from 'react-router-dom'
import AdminHandle from '../Components/AdminHandle'
import Home from '../Components/Home'
import LeaveApplication from '../Components/LeaveApplication'
import Login from '../Components/Login'
import Main from '../Components/Main'
import Signup from '../Components/Signup'
import { LoginContext } from '../Context/LoginContext'

function Routings() {
    const { loginStatus ,changeLoginStatus} = useContext(LoginContext);
console.log(loginStatus)
    return (
            <BrowserRouter>
        <div>

<nav className="nav-wrapper">
        <div className="container" style={{ height: "100%", width: "100%" }}>
        <Link to="/" className="left">
            HOME
          </Link>
          <ul className="right">
            {loginStatus ? (
            //  <button onClick={()=>changeLoginStatus(false)}> 
               <li>
                <Link to="/" onClick={()=>changeLoginStatus(false)}>Logout</Link>
              </li>
              // </button>
            ) : (
              <>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* <Switch>
          <Route path="/Home" component={Home} />
          <Route path='/Login' component={Login} />

        </Switch> */}
      </nav>
            

            <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Login' component={Login} />
            {/* <Route  path='/Logout' component={}/> */}
            <Route path='/Signup' component={Signup} />
             <Route path='/leaveapp/:id' component={LeaveApplication}/> 
             {/* <Route path='/leaveApplication' component={LeaveApplication}/>  */}
             <Route path='/admin' component={AdminHandle}/>
             {/* <Route path='/Admin' component={Admin}/>  */}

            </Switch>
             
            
        </div>
            </BrowserRouter>
    )
}

export default Routings
