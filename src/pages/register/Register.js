import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Register.css";
import { auth } from "../../helpers/firebase";
import { successNote, warningNote } from "../../helpers/toastNotify";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const displayName = firstName + " " + lastName;

    try {
      let user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      await updateProfile(auth.currentUser, { displayName: displayName });
      //console.log(auth.currentUser);
      successNote("your registration has been created");
      navigate("/");
    } catch (err) {
      warningNote("Please enter valid information");
    }
  };

  return (
    <div className="register">
      <form id="register">
        <h2 className="form-title display-3">Register</h2>
        <div className="mb-3">
          <label for="first-name" className="form-label display-4">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="Enter your first name..."
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="last-name" className="form-label display-4">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            placeholder="Enter your last name..."
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
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
          value="Register"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Register;
