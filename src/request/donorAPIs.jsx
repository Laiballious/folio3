import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './api'
import { ENDPOINTS } from './endpoints';

// Get all active Campagins
export function GetAllActiveCampagins() {
  return Api.get(ENDPOINTS.GET_ALL_CAMAPIGNS)
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

export function DonateNow(payload) {
    return Api.post(ENDPOINTS.DONATE_NOW +payload.campaignId+"/"+payload.userId , payload)
      .then(response => {
        if (response?.data.success === true) {
          toast.success('Donation made successfully!');
          return response;
        } 
      })
      .catch(error => {
        console.log(error,"error")
          toast.error(error?.response.data.message);
          return;
      });
  }
  

  export function GetDonatedCampaigns(id) {
    console.log(id,"GetDonatedCampaigns")
    return Api.get(ENDPOINTS.MY_DONATIONS + id)
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
  