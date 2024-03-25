import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterClicked(true); 
  };

  const handleBack = () => {
    setIsRegisterClicked(false); 
  };

  return (
    <div>
      {isLoggedIn ? (
        <App />
      ) : isRegisterClicked ? (
        <Register onBack={handleBack} /> 
      ) : (
        <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} /> 
      )}
      <Footer />
      <ToastContainer /> 
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
