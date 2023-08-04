import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './api'
import { ENDPOINTS } from './endpoints';


export function GetActiveCampaigns() {
    return Api.get(ENDPOINTS.GET_ACTIVE_CAMPAIGNS )
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
  

  export function GetDonors() {
    return Api.get(ENDPOINTS.GET_DONORS )
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

  
  export function GetCampaginCreators() {
    return Api.get(ENDPOINTS.GET_CAMAPIGN_CREATORS )
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
  

  