import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../fonts/font.css";
import "../style/sign-up.css";
import Icon from "../svg/icon";
import Back from "../svg/back";

export const SignUp = (_) => {
  let navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usertype, setUsertype] = useState("");

  useEffect(() => {
    if (document.getElementById("student") && document.getElementById("teacher") && document.getElementById("admin") && document.getElementById(usertype)) {
      document.getElementById("student").className = "user-select-1";
      document.getElementById("teacher").className = "user-select-1";
      document.getElementById("admin").className = "user-select-2";

      document.getElementById(usertype).className = "user-select-1-selected";
    }
  });
  

  const createAccount = async (e) => {
    e.preventDefault();
    if(usertype) {
      try {
        const response = await axios.post(
          global.route + `/api/users`,
          {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            usertype: usertype,
          },
          { withCredentials: true }
        );
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please select at least one option")
    }
  }

  const signUpStep1 = _ => {
    return (
      <div className="primary-box-sign-up" id="step1">
        <div className="box-top">
          <a href="/SignIn">
            <button className="back-button">
              <Back />
            </button>
          </a>
          <p>Step 1 of 2</p>
        </div>
        <div className="title">
          <h1>
            <Icon /> Académy
          </h1>
        </div>
        <div className="user-authentication-input">
          <label html="email">Email Address</label>
          <input
            id="email2"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="auth-name">
          <div>
            <label>First Name</label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="John"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Doe"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="user-authentication-input">
          <label html="password">Password</label>
          <input
            id="password2"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="next-button"
            onSubmit={(e) => nextAction()}
            onClick={(e) => nextAction()}
          >
            Next
          </button>
        </div>
      </div>
    )
  }

  const signUpStep2 = _ => {
    return (
      <div className="primary-box-sign-up-2" id="step2" style={{ display: "none" }}>
        <div className="box-top">
          <a onClick={backAction}>
            <button className="back-button">
              <Back />
            </button>
          </a>
          <p>Step 2 of 2</p>
        </div>
        <div className="title">
          <h1>
            <Icon /> Académy
          </h1>
        </div>
        
        <div style={{ marginTop: "58px" }} />

        <p className="subtitle"> Are you a..</p>

        <div className="user-authentication-input-2">
          <button id="student" onClick={() => setUsertype("student")} className="user-select-1">
            Student
          </button>
        </div>

        <div style={{marginTop: "22px"}}/>

        <div className="user-authentication-input-2">
          <button id="teacher" onClick={() => setUsertype("teacher")} className="user-select-1">
            Teacher
          </button>
        </div>
        
        <div style={{ marginTop: "36px" }} />

        <p className="subtitle"> Or</p>

        <div className="user-authentication-input-2">
          <button id="admin" onClick={() => setUsertype("admin")} className="user-select-2">
            Administrator
          </button>
        </div>
        
        <div style={{ marginTop: "55px" }} />
        <div className="user-authentication-input-2">
          <div>
            <button
              className="sign-up-button"
              onSubmit={(e) => createAccount(e)}
              onClick={(e) => createAccount(e)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  const nextAction = _ => {
    try {
      if(!email || !firstname || !lastname || !password)
        return console.log("Please fill in all fields");
      
      if (document.getElementById("step1") && document.getElementById("step2")) {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
      }

    } catch(error) {
      return console.log(error)
    }
  }

  const backAction = _ => {
    if (document.getElementById("step1") && document.getElementById("step2")) {
      document.getElementById("step1").style.display = "block";
      document.getElementById("step2").style.display = "none";
    }
  };

  return (
    <div className="background">
        {signUpStep1()}
        {signUpStep2()}
    </div>
  );
};
