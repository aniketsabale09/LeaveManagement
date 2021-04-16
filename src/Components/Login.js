import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allUserDetails, setAllUserDetails] = useState([]);
  const { changeLoginStatus } = useContext(LoginContext);

  useEffect(() => {
    let allUserDetails = JSON.parse(localStorage.getItem("UsersData"));
    setAllUserDetails(allUserDetails);
  }, []);

  const checkUserValid = () => {
    var c = 0;
    console.log(allUserDetails);
    allUserDetails.map((obj) => {
      if (
        obj.Email == username &&
        obj.Password == password &&
        obj.isAdmin == false
      ) {
        c = 1;
      } else if (
        obj.Email == username &&
        obj.Password == password &&
        obj.isAdmin == true
      ) {
        c = 2;
      }
    });

    if (c == 1) {
      localStorage.setItem(
        "loginStatus",
        JSON.stringify([{ loginStatus: true }])
      );
      changeLoginStatus(true);
      props.history.push(`/leaveapp/${username}`);
      alert("login successfull");
    } else if (c == 2) {
      localStorage.setItem(
        "loginStatus",
        JSON.stringify([{ loginStatus: true }])
      );
      alert("called local");
      changeLoginStatus(true);

      props.history.push("/admin");
    } else {
      localStorage.setItem(
        "loginStatus",
        JSON.stringify([{ loginStatus: false }])
      );
      changeLoginStatus(false);
    }
  };

  return (
    <div>
      <div className="container center form-group">
        <center>
          <h3> Log In </h3>
          <div className="row">
            <form autoComplete="off" className="m-5 col-md-10">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control validate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control validate"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary "
                onClick={checkUserValid}
              >
                {" "}
                LogIn
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary "
                // onClick={this.Signup}
              >
                {" "}
                SignUp{" "}
              </button>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Login;
