// ForgetPass.jsx
import React, { useState } from 'react';
import ForgetPassscreens from '../../../../components/ForgetPassScreens/ForgetPassscreens';
import { useNavigate } from "react-router-dom";
import { ForgetPassword } from '../../../../request/authAPIS';
import { ToastContainer } from 'react-toastify';

const ForgetPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!email) {
      return;
    }
    ForgetPassword({ "email": email }).then((response) => {
        if(response?.data.success === true){
            localStorage.setItem("resetPasswordEmail", email);
            setTimeout(() => {
              navigate("/OTP");
            }, 1500);
        }
      }).catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <ForgetPassscreens
        heading="Find your email"
        text="Email Address"
        content="Next"
        value={email}
        onChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    <ToastContainer />

    </div>
  );
};

export default ForgetPass;
