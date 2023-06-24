import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import './Login.css';
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state";
import { SERVER_URL } from "../../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";

function Login() {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitToastId = React.useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post(`${SERVER_URL}/api/v1/auth/login`, formData).then((res) => {
        setIsLoading(false);
        dispatch(
          setLogin({
            user: res.data.user,
            token: res.data.token,
          })
        );
        navigate("/home");
        if (!toast.isActive(submitToastId.current)) {
        toast.success("Login successful", {
          toastId: submitToastId.current,
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      };
      }
    ).catch((error) => {
      if (!toast.isActive(submitToastId)) {
        toast.error("Login failed", {
          toastId: submitToastId.current,
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
    <MDBContainer fluid className="p-3 container">


        <MDBRow className="align-items-center justify-content-center">

            <MDBCol md='12' className='text-center text-md-center d-flex flex-column justify-content-center'>

                <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                    The best offer &nbsp; 
                    <span className="text-primary">for your business</span>
                </h1>
            
            </MDBCol>
        </MDBRow>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample" />
        </MDBCol>

        <MDBCol col='4' md='6' className='input-container'>

            <div className='input-wrapper'>

            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' name='email' type='email' size="lg" onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' name='password' type='password' size="lg" onChange={handleChange}/>

            <div className='text-center text-md-center mt-4 pt-2'>
                <MDBBtn onClick={submitForm} className="mb-0 px-5" size='lg'>Login</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-primary links">Register</a></p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

      <div className="footer d-flex flex-md-row text-center text-md-center py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>

      </div>

    </MDBContainer>
          <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable={false}
          theme="light"
        />
        </>
  );
}

export default Login;