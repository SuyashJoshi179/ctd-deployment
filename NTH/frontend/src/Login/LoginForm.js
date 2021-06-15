import { Form } from "react-bootstrap";
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import {login} from "../utils/index";
import nthlogo from './nth-logo.png'


const LoginForm = () => {
  const history=useHistory();

  const initialFormData= Object.freeze({
    username:"",
    password:""
  });

  const [loginFormData, updateLoginFormData]= useState(initialFormData);

  const handleChange = (e) =>{
    updateLoginFormData({
      ...loginFormData,
      [e.target.name]:e.target.value.trim(),
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(loginFormData);
    axiosInstance
          .post("get_token/",{
            username:loginFormData.username,
            password:loginFormData.password,
          })
          .then((res)=>{
            localStorage.setItem("token",res.data.token);
            axiosInstance.defaults.headers["Authorization"]="Token "+localStorage.getItem('token');
            window.location.pathname="question/"
            console.log(res.status);
          });
  };
  return (
    <div>
      <Form className="login-page">
      <img src={nthlogo} width='350px'/>

        <Form.Group  controlId="username">
          <Form.Control name="username"  className='login-form-input' onChange={handleChange} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control name="password" className='login-form-input' onChange={handleChange} type="password" placeholder="Password" />
        </Form.Group>
        <div className="login-button">
          <Link to='/question'>
            <button onClick={handleSubmit} type="submit">Login</button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
