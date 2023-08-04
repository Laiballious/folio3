import React, { useEffect,useState } from 'react'
import Sidebar from '../../components/Sidebar/drawer';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import DataTable from "../../components/table/table";
import { GetCampaginCreators } from '../../request/adminAPIs';
const data = [
  { name: "Dashboard", icon: <HomeOutlinedIcon />, path: "" },
  { name: "Donors", icon: <InboxOutlinedIcon />, path: "donor-list" },
  { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon />, active: true, color: '#fff', path: "client-list" },
  { name: "Profit", icon: <MailOutlineIcon /> },
];
const columns = [
  { id: 'userName', label: 'Client Name', minWidth: 170 },
  { id: 'totalAmountRaised', label: 'Total Donation Raised', minWidth: 170 },

  {
    id: 'totalCampaignsCreated',
    label: 'no. of Campaigns',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
  
];

const ClientList = () => {
  const [campaigns, setCampaigns] = useState()

  useEffect(()=>{
    GetCampaginCreators().then((response)=>{
      console.log(response)
      setCampaigns(response?.data.campaignDetails)
    })
  },[])
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
        <Sidebar data={data} />
      </div>
      <div style={{ margin:"30px" , flex: 1, padding: '30px' }}>
        <h3>Client Table</h3>
        {campaigns && campaigns.length > 0 ? (
          <DataTable columns={columns} rows={campaigns.map(item => ({
            userName: item?.userName, // Assuming campaign.campaign is the name you want
            totalCampaignsCreated: item.totalCampaignsCreated, // Add the amount property
            totalAmountRaised: item.totalAmountRaised,
                    }))} style={{ width: "100vw" }} />) : (
          <p>Loading...</p>
        )}

      </div>
    </div>

  )
}

export default ClientList
