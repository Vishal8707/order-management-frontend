import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
