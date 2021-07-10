import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/registerLogin1.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import axiosInstance from "../axios";
import { login } from "./utils";
import "../assets/css/carouselAnimation.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ErrorModal from "./ErrorModal";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  first_name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  phone_no: yup.string().min(10).max(10).required("Contact is required"),
  reg_no: yup
    .string()
    .matches(/^[CEI]+[0-9]+K\d\d\d\d\d\d\d\d$/, "Incorrect MIS ID entered")
    .required(),
  password: yup.string().min(6).max(20).required("Password is required"),
  newPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegisterLogin1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signupError, setsignupError] = useState("");

  const options = ["Senior", "Junior"];
  const defaultOption = options[0];
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
    // e.preventDefault();

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
        setsignupError("Account created successfully!");
        handleShow();
      })
      .catch((err) => {
        if (err.response.data.username) {
          setsignupError(err.response.data.username);

          handleShow();
        } else if (err.response.data.password) {
          setsignupError(err.response.data.password);
          handleShow();
        } else if (err.response.data.profile) {
          const error = err.response.data.profile;

          if (error.reg_no) {
            setsignupError(error.reg_no[0]);
            handleShow();
          } else if (error.phone_no) {
            setsignupError(error.phone_no[0]);
            handleShow();
          } else if (error.email) {
            setsignupError(error.email[0]);
            handleShow();
          }
        }
      });
  };

  const handleLoginSubmit = (e) => {
    // e.preventDefault();

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
      })
      .catch((err) => {
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
                {...register("username")}
                className="input m-2"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleRegisterChange}
              />
              <p className="error-text">{errors.username?.message}</p>
              <input
                {...register("first_name")}
                className="input m-2"
                name="first_name"
                id="first_name"
                placeholder="Name"
                onChange={handleRegisterChange}
              />
              <p className="error-text">{errors.first_name?.message}</p>
              <input
                {...register("email")}
                className="input m-2"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleProfileChange}
              />
              <p className="error-text">{errors.email?.message}</p>
              <input
                {...register("phone_no")}
                className="input m-2"
                name="phone_no"
                id="phone_no"
                placeholder="Contact"
                onChange={handleProfileChange}
              />
              <p className="error-text">{errors.phone_no?.message}</p>
            </div>
            <div className="form-holder">
              <input
                {...register("reg_no")}
                className="input m-2"
                name="reg_no"
                id="reg_no"
                placeholder="MIS ID (C2K19106304)"
                onChange={handleProfileChange}
              />
              <p className="error-text">{errors.reg_no?.message}</p>
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
                {...register("password")}
                type="password"
                name="password"
                id="password"
                className="input m-2"
                placeholder="Password"
                onChange={handleRegisterChange}
              />
              <p className="error-text">{errors.password?.message}</p>
              <input
                {...register("newPassword")}
                type="password"
                name="newPassword"
                id="newPassword"
                className="input m-2"
                placeholder="Confirm Password"
              />
              <p className="error-text">{errors.newPassword?.message}</p>
            </div>
          </div>
          <button
            className="submit-btn"
            onClick={handleSubmit(handleRegisterSubmit)}
          >
            Sign up
          </button>
          <ErrorModal
            signupError={signupError}
            show={show}
            handleClose={handleClose}
          ></ErrorModal>
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
            <button
              className="submit-btn"
              onClick={handleSubmit(handleLoginSubmit)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin1;
