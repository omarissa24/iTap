import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

import {
  MDBBtn,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${SERVER_URL}/api/v1/auth/register`, formData).then((res) => {
      console.log(res.data);
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer fluid className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <MDBRow className="rower align-items-start" style={{ height: "70%" }}>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Sign
            <span className="text-primary">Learnify</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Embark on a journey of cultural immersion and communication as you
            discover the beauty of Lebanese Sign Language. Our website offers
            comprehensive and interactive lessons that will teach you to speak
            with your hands, opening up a world of new connections and
            opportunities. Whether you're a beginner or looking to enhance your
            skills, our experienced instructors will guide you through the
            intricacies of this unique language, giving you the tools to
            communicate with the deaf community and appreciate the rich heritage
            of Lebanon. Join us today and start your signing adventure
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    name="firstName"
                    label="First name"
                    id="form1"
                    type="text"
                    onChange={handleChange}
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    name="lastName"
                    label="Last name"
                    id="form1"
                    type="text"
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                name="email"
                label="Email"
                id="form1"
                type="email"
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                name="password"
                label="Password"
                id="form1"
                type="password"
                onChange={handleChange}
              />

              <MDBBtn className="w-100 mb-4" size="md" onClick={submitForm}>
                sign up
              </MDBBtn>

              <div className="text-center text-md-center mt-4 pt-2">
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Already have an account?{" "}
                  <a href="/" className="link-primary links">
                    Login
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
