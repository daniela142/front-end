//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from './account/components/SignIn';
import "./account/fonts/MuseoModerno.ttf";
import "./account/fonts/DMSans.ttf";


function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<SignIn />} ></Route>
       </Routes>
    </Router>
  );
}

export default App;

