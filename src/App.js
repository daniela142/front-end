//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./account/fonts/MuseoModerno.ttf";
import "./account/fonts/DMSans.ttf";

// pages
import { SignIn } from './account/components/SignIn';
import { Dashboard } from './dashboard/components/Dashboard';
import { SignUp } from './account/components/SignUp'

function App() {
  global.route = 'https://testing-system-blush.vercel.app';
  //global.route = 'http://localhost:3000';

  return (
    <Router>
       <Routes>
        <Route path="/" element={<Dashboard />} ></Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
    </Router>
  );
}

export default App;

