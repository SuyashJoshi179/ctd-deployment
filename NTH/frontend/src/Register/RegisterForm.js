import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import login from "../";

const RegisterForm = () => {
  const [formData, setFormData] = useState(0);
  const history = useHistory();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    let pass = document.getElementById("password").value;
    let confirmPassword = document.getElementById(
      "formBasicConfirmPassword"
    ).value;
    if (pass !== confirmPassword && pass.length !== 0) {
      alert("Passwords do not match!");
    }
    axiosInstance
      .post("/", formData)
      .then((res) => {
        if (res.status === 200) {
          alert("You have registered Succesfully..!!");
          window.location.pathname = "/";
        } else {
          alert(res.data.username[0]);
        }
      })
      .catch((err) => {
        alert("Server Error");
      });
  }
  return (
    <div className="register-page">
      <h4>Registration Form</h4>
      <div className="field">
        <label>Name</label>
        <input
          id="fullname"
          name="fullname"
          className="register-form-input"
          onChange={handleChange}
          type="text"
          placeholder="type your name"
          required
        />
      </div>

      <div className="field">
        <label>Username</label>
        <br />
        <input
          id="username"
          name="fullname"
          className="register-form-input"
          onChange={handleChange}
          type="text"
          placeholder="type your username"
          required
        />
      </div>

      <div className="field">
        <label>Mobile Number</label>
        <br />
        <input
          id="mobile_number"
          name="mobile_number"
          className="register-form-input"
          onChange={handleChange}
          type="text"
          placeholder="type your mobile number"
          required
          pattern="[0123456789][0-9]{7, 14}"
        />
      </div>

      <div className="field">
        <label>College</label>
        <br />
        <input
          id="college"
          name="college"
          className="register-form-input"
          onChange={handleChange}
          type="text"
          placeholder="type your college name"
          required
        />
      </div>
      <div className="field">
        <label>Email</label>
        <br />
        <input
          id="email"
          name="email"
          className="register-form-input"
          onChange={handleChange}
          type="text"
          placeholder="type your email"
          required
        />
      </div>
      <div className="field">
        <label>Password</label>
        <br />
        <input
          id="password"
          name="password"
          className="register-form-input"
          onChange={handleChange}
          type="password"
          placeholder="type your password"
          required
        />
      </div>
      <button onClick={handleSubmit} className="register-button" type="submit">
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
