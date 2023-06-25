import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import SignUp from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./pages/Details/Details";
import Sub from "./pages/Sub/Sub";

function App() {

  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" /> } />
          <Route path="/sub/:id" element={isAuth ? <Sub /> : <Navigate to="/" /> } />
          <Route path="/:id/details/:id" element={isAuth ? <Details /> : <Navigate to="/" /> } />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
    </>
  );
}

export default App;