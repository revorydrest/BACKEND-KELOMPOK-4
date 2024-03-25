import React, { useRef } from 'react';
import axios from 'axios';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register(props) {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputPhone = useRef(null);

  const handleRegister = async () => {
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    const phone = inputPhone.current.value;

    console.log({ email, password, name, phone });

    try {
      const response = await axios.post("http://localhost:8000/api/pengguna", {
        name: name,
        email: email,
        password: password,
        phone: phone,
      });
      console.log(response.data);
      toast.success("Selamat! Akun Anda telah berhasil didaftarkan. Silakan login."); 
      props.onRegisterSuccess(); 
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
        } else {
          console.error('Error during registration:', error);
          toast.error("Penulisan format salah atau Email yang anda gunakan telah terdaftar. Silakan coba lagi."); 
        }
      } else {
        console.error('Error during registration:', error);
      }
    }
  };

  const handleBack = () => {
    props.onBack(); 
  };

  return (
    <div className="login-form">
      <form>
      <h2 className='regis'>
        Register
      </h2>
        <div className="mb-3">
          <label htmlFor="input-name" className="form-label">Nama</label>
          <input ref={inputName} type="text" className="form-control" id="input-name" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">Email address</label>
          <input ref={inputEmail} type="email" className="form-control" id="input-email" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-password" className="form-label">Password</label>
          <input ref={inputPassword} type="password" className="form-control" id="input-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-phone" className="form-label">No Telepon</label>
          <input ref={inputPhone} type="tel" className="form-control" id="input-phone" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
        <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button> 
      </form>
    </div>
  );
}
