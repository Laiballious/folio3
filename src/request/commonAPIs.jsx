import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './api'
import { ENDPOINTS } from './endpoints';

// Get all active Campagins
export function GetCampagin(id) {
  return Api.get(ENDPOINTS.GET_CAMAPIGN+id)
    .then(response => {
      if (response?.data.success === true) {
        return response;
      }
    })
    .catch(error => {
        toast.error(error?.response.data.message);
        return;
    });
}


export function UpdateProfile(payload) {
  return Api.put(ENDPOINTS.UPDATE_PROFILE+payload.id,payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('Profile updated successfully!');
        return response;
      }
    })
    .catch(error => {
        toast.error(error?.response.data.message);
        return;
    });
}


export function UpdatePassword(payload) {
  console.log(payload)
  return Api.post(ENDPOINTS.RESET_PASSWORD+payload.id,payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('Password has been Updated!');
        return response;
      }
    })
    .catch(error => {
        toast.error(error?.response.data.message);
        return;
    });
}



export function ViewAllCampaigns() {
  return Api.get(ENDPOINTS.VIEW_ALL_CAMPAIGNS)
    .then(response => {
      if (response?.data.success === true) {
        return response;
      }
    })
    .catch(error => {
        toast.error(error?.response.data.message);
        return;
    });
}