import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import "./Login.css";
import { auth } from "../../helpers/firebase";
import { errorNote, successNote } from "../../helpers/toastNotify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
      successNote("Login successfully");
    } catch (err) {
      errorNote("Please Enter the Right Mail and Password");
    }
  };
  const handleGoogleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        successNote("Login successfully");
      })
      .catch((error) => {
        errorNote("Please Enter the Right Mail and Password");
      });
  };
  return (
    <div className="register">
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Login"
            onClick={handleSubmit}
          />
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Sign In Google"
            onClick={handleGoogleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
