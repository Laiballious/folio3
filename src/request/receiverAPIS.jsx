import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './api'
import { ENDPOINTS } from './endpoints';

// Create new Campagin
export function CreateCampagin(payload) {
  return Api.post(ENDPOINTS.CREATE_CAMPAIGN, payload,{
    headers: {
      'Content-Type': 'multipart/form-data', // Important for handling FormData
    }
  })
    .then(response => {
      console.log(response,"CampaignsData")
      if (response?.data.success === true) {
        toast.success('Campagin created successfully!');
        return response;
      } else {
        toast.error('Failed to create campagin!');
        return;
      }
    })
    .catch(error => {
      console.log(error)
        toast.error(error?.response.data.message);
        return;
    });
}

// Get active Campagins
export function GetCampagins(id) {
  return Api.get(ENDPOINTS.GET_USER_CAMPAIGNS+id)
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


// Get list of Campagins
export function GetAllCampagins(id) {
 
  return Api.get(ENDPOINTS.GET_USER_ALL_CAMPAIGNS+id)
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
