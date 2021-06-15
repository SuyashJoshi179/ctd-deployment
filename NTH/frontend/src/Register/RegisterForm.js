import { Form } from "react-bootstrap";
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axiosInstance from '../axios'
import login from '../'

const RegisterForm = () => {
    const [formData, setFormData] = useState(0);
    const history = useHistory();
    const handleChange = (e) =>{
        setFormData({
          ...formData,
          [e.target.name]:e.target.value.trim(),
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        let pass = document.getElementById('password').value ;
        let confirmPassword = document.getElementById('formBasicConfirmPassword').value;
        if((pass !== confirmPassword) && (pass.length!==0) ){
            alert('Passwords do not match!');
        }
        axiosInstance.post('/',formData).then((res) => {
          if(res.status===200){
            alert("You have registered Succesfully..!!");
            window.location.pathname="/";
          }
          else{
              alert(res.data.username[0])
          }
        })
        .catch(err=>{
          alert("Server Error");
        })
    }
    return ( 
        <div>
            <Form>
              <Form.Group controlId="fullname">
                <Form.Control name="fullname" onChange={handleChange} required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="username">
                <Form.Control name="username" onChange={handleChange} required type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="mobile_number">
                <Form.Control name="mobile_number" onChange={handleChange} required type="text" placeholder="Mobile Number" />
              </Form.Group>
              <Form.Group controlId="college">
                <Form.Control name="college" onChange={handleChange} required type="text" placeholder="College" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control name="email" onChange={handleChange} required type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Control name="password" onChange={handleChange} required type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Control required type="password" placeholder="Confirm Password" />
              </Form.Group>
              {/* {handleSubmit && <p id='pass-not-match'></p>} */}
              {/* <Form.Group controlId="submit">
                <Form.Control name="submit" type= "submit" placeholder="Register"/>
              </Form.Group> */}
              <button
                onClick={handleSubmit}
                className="register-button"
                type="submit"
              >
                Register
              </button>
            </Form>
        </div>
     );
}
 
export default RegisterForm;