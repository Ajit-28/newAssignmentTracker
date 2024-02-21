import React, { useState } from 'react';
import './Login.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password
    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      // If there is any error, do not proceed with the login logic
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/v1/api/login", {
        email: email,
        password: password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = 12345;

      localStorage.setItem('token', token);

      if (response.status === 200) {
        console.log('Login successful');
        const role = localStorage.getItem('role');

        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        console.log('Login failed:', response.data);

        setEmailError('Invalid email or password');

        setPasswordError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);

      setEmailError('Login failed. Please try again.');

      setPasswordError('Login failed. Please try again.');
    }
  };

  return (
    <div className='LoginContainer'>
      <Header />
      <div className="loginWrapper">
        <h1 className='Lheading'> Please sign in</h1>
        <form onSubmit={handleLogin}>
          <div className="inputcontainer">
            <div className='inputwrapper'>
              <EmailIcon />
              <input
                type='email'
                placeholder='Username'
                className='inputTxt'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <p className="errorText">{emailError}</p>}
            <div className='inputwrapper'>
              <LockIcon />
              <input
                type='password'
                placeholder='Password'
                className='inputTxt'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {passwordError && <p className="errorText">{passwordError}</p>}
          </div>
          <div className="lbtnContainer">
            <button className='loginBtn' type="submit">Sign in</button>
          </div>
        </form>
        <div className="txtContainer">
          <p>Don't have an account?</p>
          <Link id='linkTxt' to='/signup'>Sign up here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
