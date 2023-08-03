import React from 'react';
import './forgetPassScreen.css';
import TextField from '@mui/material/TextField';
import logo from '../../Assets/transparent/1.png';
import icon from '../../Assets/logos/lock.png';
import { ToastContainer } from 'react-toastify';

const ForgetPassscreens = ({ heading, text, text2, content, value, onChange, onSubmit }) => {
  return (
    <div className='main-forget-screens'>
      <div className='forget-screens'>
        <div className='forget-screen-content'>
          <img className='logo' src={logo} alt="atiyah-logo" style={{ height: '10rem' }} />
          <h3>{heading}</h3>
          <TextField
            className='input-field'
            required
            id="outlined-required"
            label={text}
            value={value}
            onChange={onChange}
            error={false} // You can handle error state outside the component
          />
          <div className='input-field'>{text2}</div>
        </div>
        <button className='forget-btns' onClick={onSubmit}>{content}</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassscreens;
