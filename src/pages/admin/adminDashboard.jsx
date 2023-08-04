import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/drawer";
import CampaignTable from "../../components/AdminTables/CampaignTable";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import AdminBarChart from "../../components/adminGraph/BarChart";
import AdminLineChart from "../../components/adminGraph/LineChart";
import { formatDate } from "../../lib/dateFunc";
import DataTable from "../../components/table/table";
import { GetActiveCampaigns } from "../../request/adminAPIs";

const data = [
  { name: "Dashboard", icon: <HomeOutlinedIcon />, active: true, color: '#fff', path: "" },
  { name: "Donors", icon: <InboxOutlinedIcon />, path: "donor-list" },
  { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon />, path: "client-list" },
  { name: "Profit", icon: <MailOutlineIcon /> },
];

const columns = [
  { id: 'campaign', label: 'Campaign', minWidth: 170 },
  { id: 'user', label: 'Campaign Owenr', minWidth: 170 },

  {
    id: 'amountNeeded',
    label: 'Amount Needed',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'amountCollected',
    label: 'Donation Rasies',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'startDate',
    label: 'Campaign Start Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }, {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];


const AdminDashboard = () => {
const [activeCampaign , setActiveCampaign] = useState()
const [weelklyDonation , setWeelklyDonation] = useState()
  
useEffect(()=>{
  GetActiveCampaigns().then((response)=>{
    console.log(response)
    setActiveCampaign(response?.data.activeCampaigns)
    setWeelklyDonation(response?.data.donationsByDayOfWeek)
  })
},[])

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, padding: '30px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1>Analytics Overview</h1>
        </div>
        <div style={{ display: 'flex', marginBottom: '30px', gap: '50px' }}>
          <div style={{ flex: 1 }}>
          <AdminBarChart dailyDonationData={weelklyDonation}/>

          </div>
          <div style={{ flex: 1 }}>
            <AdminLineChart />
          </div>
        </div>
        <div>

          <div style={{ margin: '10 auto' }}>
            <h1 style={{ marginBottom: '30px' }} >On Going Campaign</h1>
            {activeCampaign && activeCampaign.length > 0 ? (
          <DataTable columns={columns} rows={activeCampaign.map(item => ({
            campaign: item?.campaign, // Assuming campaign.campaign is the name you want
            user:item?.userName,
            amountNeeded: item?.amountNeeded, // Add the amount property
            amountCollected: item?.amountCollected, // If this is correct
            startDate: formatDate(item?.startDate),
            status: item?.status // Check the property name userName

          }))} style={{ width: "100vw" }} />) : (
          <p>Loading...</p>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;