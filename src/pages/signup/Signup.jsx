import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import './Signup.css';
import Header from '../../common/Header';
import { Radio } from '@mui/material';
import axios from 'axios';

function Signup() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { username, email, location, password, confirmPassword } = user;

  const changeInputHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate other fields
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!location.trim() || !/^[a-zA-Z\s]+$/.test(location)) {
      newErrors.location = 'Invalid location';
    }

    if (!user.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Your API call
    await axios.post("http://localhost:8080/v1/api/addUser", user);
    navigate("/login");
  };

  return (
    <form className='SignupContainer' onSubmit={(e) => onSubmit(e)}>
      <Header />
      <div className="mainContainer">
        <p className='title'>Please sign up here</p>
        <div className="signupWrapper">
          <div className='column1'>
            <div className='signInputwrapper'>
              <AccountCircleIcon />
              <input
                type='text'
                placeholder='Username'
                className='inputTxt'
                name='username'
                value={username}
                onChange={(e) => changeInputHandle(e)}
              />
            </div>
            {errors.username && <div className="error-message">*{errors.username}</div>}
            <div className='signInputwrapper'>
              <div className="lockIcon">
                <LockIcon />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='inputTxt'
                name='password'
                value={password}
                onChange={(e) => changeInputHandle(e)}
              />
              <button
                type='button'
                className='visibilityToggle'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
              </button>
            </div>
            {errors.password && <div className="error-message">*{errors.password}</div>}
            <div className='signInputwrapper'>
              <LocationOnIcon />
              <input
                type='text'
                placeholder='Location'
                className='inputTxt'
                name='location'
                value={location}
                onChange={(e) => changeInputHandle(e)}
              />
            </div>
            {errors.location && <div className="error-message">*{errors.location}</div>}
          </div>
          <div className="column2">
            <div className='signInputwrapper'>
              <EmailIcon />
              <input
                type='email'
                placeholder='Email'
                className='inputTxt'
                name='email'
                value={email}
                onChange={(e) => changeInputHandle(e)}
              />
            </div>
            {errors.email && <div className="error-message">*{errors.email}</div>}
            <div className='signInputwrapper'>
              <div className="lockIcon">
                <LockIcon />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                className='inputTxt'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => changeInputHandle(e)}
              />
              <button
                type='button'
                className='visibilityToggle'
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
              </button>
            </div>
            {errors.confirmPassword && <div className="error-message">*{errors.confirmPassword}</div>}
            <div className="radiobtnContainer">
              <div className='radioData'>
                <span>Male</span>
                <Radio
                  value='male'
                  color='primary'
                  name='gender'
                  checked={user.gender === 'male'}
                  onChange={(e) => changeInputHandle(e)}
                />
              </div>
              <div className='radioData'>
                <span>Female</span>
                <Radio
                  value='female'
                  color='primary'
                  name='gender'
                  checked={user.gender === 'female'}
                  onChange={(e) => changeInputHandle(e)}
                />
              </div>
            </div>
            <div className='errorContainer'>
              {errors.gender && <div className="error-message">*{errors.gender}</div>}
            </div>
          </div>
        </div>
        <div className="SignbtnContainer">
          <button type="submit" className='submitbtn'>Sign up</button>
        </div>
        <div className="txtContainer">
          <p>Already have an account?</p>
          <Link id='linkTxt' to='/login'>Login</Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
