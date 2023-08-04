import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/drawer'
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import DataTable from "../../components/table/table";
import { GetDonors } from '../../request/adminAPIs';
import { formatDate } from '../../lib/dateFunc';

const data = [
  { name: "Dashboard", icon: <HomeOutlinedIcon />, path: "" },
  { name: "Donors", icon: <InboxOutlinedIcon />, active: true, color: '#fff', path: "donor-list" },
  { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon />, path: "client-list" },
  { name: "Profit", icon: <MailOutlineIcon /> },
];

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'totalDonation', label: 'Total Donation', minWidth: 170 },

  {
    id: 'totalCampaigns',
    label: 'Donated no. of Campaigns',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
{
    id: 'totalAmountDonated',
    label: 'Recent Donation',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'lastDonationDate',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
  
];


const DonorList = () => {
  const [donors, setDonors] = useState()

useEffect(()=>{
  GetDonors().then((response)=>{
    console.log(response)
    setDonors(response?.data.donorDetails)
  })
},[])

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
        <Sidebar data={data} />
      </div>
      <div style={{ margin:"30px", flex: 1, padding: '30px' }}>
        <h3>Donors Table</h3>
        {donors && donors.length > 0 ? (
          <DataTable columns={columns} rows={donors.map(item => ({
            name: item?.userName, // Assuming campaign.campaign is the name you want
            totalDonation: item.totalAmountDonated, // Add the amount property
            totalCampaigns: item.totalUniqueCampaigns,
            totalAmountDonated: item.totalAmountDonated,
            lastDonationDate: formatDate(item.lastDonationDate),
                    }))} style={{ width: "100vw" }} />) : (
          <p>Loading...</p>
        )}

      </div>
    </div>

  )
}

export default DonorList
