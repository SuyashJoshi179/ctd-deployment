import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import { login } from "../utils/index";
import nthlogo from "./nth-logo.png";

const LoginForm = () => {
  const history = useHistory();

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [loginFormData, updateLoginFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
    axiosInstance
      .post("get_token/", {
        username: loginFormData.username,
        password: loginFormData.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        axiosInstance.defaults.headers["Authorization"] =
          "Token " + localStorage.getItem("token");
        window.location.pathname = "question/";
        console.log(res.status);
      });
  };
  return (
    <div>
      <div className="login-page">
        {/* <img src={nthlogo} width='350px'/> */}
        <h2>Login</h2>
        <div className='field'>
        <label>Username</label>
        <br />
        <i class="fas fa-user"></i>
        <input
          id="username"
          name="username"
          className="login-form-input"
          onChange={handleChange}
          type="text"
          placeholder="type your username"
        />
        </div>
        <div className="field">
          <label>Password</label>
          <br />
          <input
            id="password"
            name="password"
            className="login-form-input"
            onChange={handleChange}
            type="password"
            placeholder="type your password"
          />
        </div>

        <div className="login-button">
          <Link to="/question">
            <button onClick={handleSubmit} type="submit">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
