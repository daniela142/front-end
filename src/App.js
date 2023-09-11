import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from './account/SignIn';


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
