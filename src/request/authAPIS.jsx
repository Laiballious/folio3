import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ENDPOINTS } from './endpoints';
import Api from './api'
// Create new user
export function SignIn(payload) {
  return Api.post(ENDPOINTS.SIGIN, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('New user created successfully!');
        return response;
      } else {
        toast.error('Failed to create account!');
        return;
      }
    })
    .catch(error => {
      console.log(error,"error")
        toast.error(error?.response.data.message);
        return;
    });
}


// user login
export function Login(payload) {
  return Api.post(ENDPOINTS.LOGIN, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('Login successful!');
        return response;
      } else {
        toast.error('Login failed. Please check your credentials.');
        return;
      }
    })
    .catch(error => {
      toast.error(error?.response.data.message);
    });
}


// user forget password
export  function ForgetPassword(payload) {
  return Api.post(ENDPOINTS.SEND_OTP_MAIL, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('An OTP has been sent!');
        return response;
      } else {
        toast.error('Failed to sent OTP. Please enter correct email address.');
        return;
      }
    })
    .catch(error => {
      toast.error(error?.response.data.message);
    });
}


export function VerifyOTP(payload) {
  return Api.post(ENDPOINTS.VERIFY_OTP, payload)
    .then(response => {
      console.log(response,"response")
      if (response?.data.success === true) {
        toast.success('OTP verified successfully!');
        return response;
      } else {
        toast.error('Invalid OTP.');
        return;
      }
    })
    .catch(error => {
      toast.error(error?.response.data.message);
    });
}

export function UpdatePassword(payload) {
  return Api.post(ENDPOINTS.UPDATE_PASSWORD, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success(response?.data.message);
        return response;
      } else {
        toast.error('Password updated.');
        return;
      }
    })
    .catch(error => {
      console.log(error,"error")
      toast.error(error?.response.data.message);
    });
}


export function Logout(payload) {
  return Api.get(ENDPOINTS.LOGOUT, payload)
    .then(response => {
        return response;
    })
    .catch(error => {
      toast.error(error?.response.data.message);
    });
}
