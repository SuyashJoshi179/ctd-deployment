import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import login from "../";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";




const RegisterForm = () => {
  
  const [formData, setFormData] = useState(0);
  const history = useHistory();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  function handleRegisterSubmit(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let fullname = document.getElementById("fullname").value;
    let pass = document.getElementById("password").value;
    let college = document.getElementById("college").value;
    let mobile_number = document.getElementById("mobile_number").value;
    let email = document.getElementById("email").value;
    if(username=="" || fullname=="" || pass=="" || college=="" || mobile_number=="" || email==""){
      alert("Please Fill all the Fields..!!");
    }else{
    axiosInstance
      .post("/", formData)
      .then((res) => {
        console.log(formData);
        if (res.status === 200) {
          alert(res.data.status);
          if(res.data.registered){
            window.location.pathname = "/";
          }
        } else {
          alert(res.data.username[0]);
        }
      })
      .catch((err) => {
        alert("Server Error");
      });
    }
  }
  return (
    <form className="register-page">
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
          name="username"
          className="register-form-input"
          onChange={handleChange}
          type="username"
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
          type="email"
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
      <button onClick={handleRegisterSubmit} className="register-button" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;