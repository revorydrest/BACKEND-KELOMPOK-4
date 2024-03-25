import React, { useRef, useState } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import { toast } from 'react-toastify';
import './Login.css'; 

export default function Login(props) {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const cookies = new Cookies();

  const handleLogin = async () => {
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;

    console.log({ email, password });

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.token) {
        cookies.set("Authorization", response.data.token);
        console.log("Logging in..."); 
        props.onLogin();
        console.log("Login successful!"); 
        toast.success("Selamat datang");
      } else {
        console.error('Token not found in response');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error("Terdapat kesalahan pada Email dan Password yang anda berikan, silahkan coba lagi atau lakukan Registrasi");
    }
  }

  const handleRegisterClick = () => {
    props.onRegisterClick(); 
  };

  return (
  <div>
    <h1 className='welcome'>
      SELAMAT DATANG
    </h1>
    <div className="login-form">
      <form>
      <h2 className='login'>
        Login
      </h2>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">
            Email address
          </label>
          <input ref={inputEmail} type="email" className="form-control" id="input-email" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-password" className="form-label">Password</label>
          <input ref={inputPassword}  type="password" className="form-control" id="input-password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleRegisterClick}>Register</button> 
      </form>
    </div>
  </div>
  );
}
