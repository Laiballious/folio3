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
