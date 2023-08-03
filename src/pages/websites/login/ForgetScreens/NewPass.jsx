import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ForgetPassscreens from '../../../../components/ForgetPassScreens/ForgetPassscreens';
import { useNavigate } from "react-router-dom";
import { UpdatePassword } from '../../../../request/authAPIS';
import { ToastContainer } from 'react-toastify';

const NewPass = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = () => {
    
    const email = localStorage.getItem("resetPasswordEmail");
    UpdatePassword({ "email": email, "newPassword": newPassword ,"confirmPassword":confirmPassword})
      .then((response) => {
        if(response?.data.success === true){
            localStorage.removeItem("resetPasswordEmail");
            setTimeout(() => {
                navigate("/updated");
              }, 1500);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <ForgetPassscreens
        heading="Change password"
        text="New password"
        content="Update"
        value={newPassword}
        onChange={handleNewPasswordChange}
        text2={
          <TextField
            style={{ marginTop: "40px" }}
            className='input-field'
            required
            id="outlined-required"
            label="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        }
        onSubmit={handleSubmit}
      />
        <ToastContainer />

    </div>
  );
};

export default NewPass;
