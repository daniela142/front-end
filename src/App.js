//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./account/fonts/MuseoModerno.ttf";
import "./account/fonts/DMSans.ttf";

// pages
import { SignIn } from './account/components/SignIn';
import { Dashboard } from './dashboard/components/Dashboard';
import { SignUp } from './account/components/SignUp'

function App() {
  //global.route = 'https://testing-system-blush.vercel.app';
  global.route = 'http://localhost:3000';

  return (
    <Router>
       <Routes>
        <Route path="/" element={<Navigate to="/dashboard"/>} ></Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard page={"dashboard"} />} />
        <Route path="/courses/:id" element={<Dashboard page={"courses"} />} />
        <Route path="/courses/:id/tests/:id_exam/menu" element={<Dashboard page={"exam-menu"} />} />
        <Route path="/courses/:id/tests/:id_exam/start" element={<Dashboard page={"exam-start"} />} />
        <Route path="/courses/:id/createtest" element={<Dashboard page={"exam-create"} />} />
        <Route path="/grades" element={<Dashboard page={"grades"} />} />
        <Route path="/settings" element={<Dashboard page={"settings"} />} />
       </Routes>
    </Router>
  );
}

export default App;

