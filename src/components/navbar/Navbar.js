import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../helpers/firebase";

import "./Navbar.css";
import Logom1 from "../../assets/Logom1.png";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const signOutFunc = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            <img src={Logom1} alt="" />
          </a>
          <div className="fire-blog">
            <h2
              onClick={() => (currentUser ? navigate("/") : navigate("/"))}
            >{`────<yhekim />Blog ────`}</h2>
          </div>
          <div className="buttons">
            <div className="dropdown">
              <span className={!currentUser ? "HiUserCircle" : "hiUserCircle"}>
                <HiUserCircle />
              </span>
              {currentUser ? (
                <React.Fragment>
                  <div className="dropdown-main">
                    <h3>{currentUser.displayName}</h3>
                    <span className="HiUserCircle">
                      <div className="dropdown-content">
                        <button onClick={() => navigate("/profilo")}>
                          Profile
                        </button>
                        <button onClick={() => navigate("/newblog")}>
                          New
                        </button>
                        <button onClick={() => signOutFunc()}>Logout</button>
                      </div>

                      <HiUserCircle />
                    </span>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="dropdown-content">
                    <button className="" onClick={() => navigate("/login")}>
                      Login
                    </button>
                    <button className="" onClick={() => navigate("/register")}>
                      Register
                    </button>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
