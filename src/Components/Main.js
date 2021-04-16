import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Admin from "./Admin";
import AdminHandle from "./AdminHandle";
import Home from "./Home";
import LeaveApplication from "./LeaveApplication";
import Login from "./Login";
import SignUp from "./Signup";

const Main = () => {
    const { loginStatus } = useContext(LoginContext);
  return (
      
    <BrowserRouter>
      <nav className="nav-wrapper">
        <div className="container" style={{ height: "100%", width: "100%" }}>
          <Link to="/Home" className="left">
            HOME
          </Link>
          <ul className="right">
            {loginStatus ? (
              <li>
                <Link to="/Home">Logout</Link>
              </li>
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
    </BrowserRouter>
  );
};

export default Main;
