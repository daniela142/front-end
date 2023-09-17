import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../fonts/font.css";
import "../style/sign-up.css";
import Icon from "../svg/icon";
import Back from "../svg/back";

export const SignUp = (_) => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        global.route + `/api/users`,
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      localStorage.setItem("User", JSON.stringify(response.data));
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background">
      <div className="primary-box-sign-up">
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
            onSubmit={(e) => handleSubmit(e)}
            onClick={(e) => handleSubmit(e)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

//   const nextAction = _ => {
//     try{
//         // Check if the required fields are filled
//         if(!email || !password || !firstname || !lastname)
//             return alert("Please fill in all fields!");
//         // Check if the password is at least 8 characters
//         if(password.length < 8)
//             return alert("Password must be at least 8 characters long!");

//         // Send a POST request to the server to validate the user's email and username
//         fetch("/api/authenticateuser", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: userInput.username,
//                 email: userInput.email
//             })
//         })
//             .then((res) => {return res.json(); })
//             .then((data) => {
//                 if(!data.status){
//                     alert(data.message);
//                 }else{
//                     // Proceed to Step 2
//                     document.getElementById("step1").style.display = "none";
//                     document.getElementById("step2").style.display = "block";
//                 }
//             });
//     }catch(error){
//         return alert(error);
//     }
// };
};
