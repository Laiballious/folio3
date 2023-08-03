// OTP.jsx
import React, { useState } from 'react';
import ForgetPassscreens from '../../../../components/ForgetPassScreens/ForgetPassscreens';
import { useNavigate } from "react-router-dom";
import { VerifyOTP } from '../../../../request/authAPIS';
import { ToastContainer } from 'react-toastify';

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = () => {
    const email = localStorage.getItem("resetPasswordEmail");
    if (!email || !otp) {
      return;
    }

    VerifyOTP({"email" : email, "otp": otp}).then((response)=>{
        if(response?.data.success === true){
        setTimeout(() => {
          navigate("/resetPassword");
        }, 1500);
        }
    })
      };

  return (
    <div>
      <ForgetPassscreens
        heading="Please verify your account"
        text="OTP here"
        content="Verify"
        value={otp}
        onChange={handleOtpChange}
        onSubmit={handleSubmit}
      />
                  <ToastContainer />

    </div>
  );
};

export default OTP;
