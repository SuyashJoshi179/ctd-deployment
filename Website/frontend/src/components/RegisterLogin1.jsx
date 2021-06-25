import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/registerLogin1.css";
import axiosInstance from "../axios";
import axios from "axios";
import { login } from "./utils";
import "../assets/css/carouselAnimation.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const RegisterLogin1 = () => {
  const options = ["Senior", "Junior"];
  const defaultOption = options[0];
  //   const loginBtn = document.getElementById('login');
  //   const signupBtn = document.getElementById('signup');
  const history = useHistory();
  const signupBtn = useRef(null);
  const loginBtn = useRef(null);

  const initialLoginFormData = Object.freeze({
    username: "",
    password: "",
  });

  const initialProfileFormData = Object({
    reg_no: "",
    country_code: "+91",
    phone_no: "",
    seniorstr: "",
    senior: null,
    email: "",
  });

  const initialRegisterFormData = Object({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [registerFormData, updateRegisterFormData] = useState(
    initialRegisterFormData
  );
  const [profileFormData, updateProfileFormData] = useState(
    initialProfileFormData
  );
  const [loginFormData, updateLoginFormData] = useState(initialLoginFormData);
  const handleChange = (e) => {
    updateLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleProfileChange = (e) => {
    updateProfileFormData({
      ...profileFormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleCategory = (e) => {
    updateProfileFormData({
      ...profileFormData,
      seniorstr: e.value.trim(),
    });
    if (e.value === "Senior") {
      updateProfileFormData({
        ...profileFormData,
        senior: true,
      });
    } else {
      updateProfileFormData({
        ...profileFormData,
        senior: false,
      });
    }
    console.log(profileFormData);
  };

  const handleRegisterChange = (e) => {
    updateRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const loginButton = (e) => {
    let parent = e.target.parentNode.parentNode;
    // eslint-disable-next-line array-callback-return
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtn.current.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(profileFormData);

    console.log(profileFormData);

    axiosInstance
      .post("/register/", {
        username: registerFormData.username,
        password: registerFormData.password,
        first_name: registerFormData.first_name,
        last_name: registerFormData.last_name,
        profile: {
          reg_no: profileFormData.reg_no,
          country_code: "+91",
          phone_no: profileFormData.phone_no,
          senior: profileFormData.senior,
          email: profileFormData.email,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          alert("Account Created Successfully!");
        }
        console.log(res.data);
        console.log(res.status);
      })
      .catch((err) => {
        if (err.response.data.username) {
          alert(err.response.data.username);
        } else if (err.response.data.profile) {
          alert("A Profile with those details already exists");
        }
        console.log(err.response);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);

    axiosInstance
      .post("/api/token/", {
        username: loginFormData.username,
        password: loginFormData.password,
      })
      .then((res) => {
        login(res);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        history.push("/");
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err.response.data.detail);
        alert(err.response.data.detail);
      });
  };

  const signupButton = (e) => {
    let parent = e.target.parentNode;
    // eslint-disable-next-line array-callback-return
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtn.current.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  return (
    <div className="body-form">
      <div className="form-structor">
        <div className="signup border-gradient border-gradient-purple">
          <h2
            className="form-title"
            id="signup"
            ref={signupBtn}
            onClick={(e) => signupButton(e)}
          >
            {/* <span>or</span> */}
            Sign up
          </h2>
          <div className="d-flex justify-content-center align-items-center colDir">
            <div className="form-holder">
              <input
                type="text"
                className="input m-2"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleRegisterChange}
              />
              <input
                type="text"
                className="input m-2"
                name="first_name"
                id="first_name"
                placeholder="Name"
                onChange={handleRegisterChange}
              />
              <input
                type="email"
                className="input m-2"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleProfileChange}
              />
              <input
                type="text"
                className="input m-2"
                name="phone_no"
                id="phone_no"
                placeholder="Contact"
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-holder">
              <input
                type="text"
                className="input m-2"
                name="reg_no"
                id="reg_no"
                placeholder="MIS ID (C2K1234567)"
                onChange={handleProfileChange}
              />
              <Dropdown
                className="dropdown-input"
                options={options}
                name="seniorstr"
                id="seniorstr"
                onChange={handleCategory}
                value={defaultOption}
                placeholder="Category"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="input m-2"
                placeholder="Password"
                onChange={handleRegisterChange}
              />
              <input
                type="password"
                className="input m-2"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button className="submit-btn" onClick={handleRegisterSubmit}>
            Sign up
          </button>
        </div>
        <div className="login slide-up">
          <div className="center">
            <h2
              className="form-title"
              id="login"
              ref={loginBtn}
              onClick={(e) => loginButton(e)}
            >
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input
                className="input m-2"
                type="required"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                className="input m-2"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <button className="submit-btn" onClick={handleLoginSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin1;
