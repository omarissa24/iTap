import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import './Login.css';

function Login() {

  return (
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

            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

            <div className='text-center text-md-center mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
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
  );
}

export default Login;