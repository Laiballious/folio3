import React from 'react'
import Sidebar from '../../components/Sidebar/drawer';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import ClientTable from '../../components/AdminTables/clientTable';
const data = [
  { name: "Dashboard", icon: <HomeOutlinedIcon />, path: "" },
  { name: "Donors", icon: <InboxOutlinedIcon />, path: "donor-list" },
  { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon />, active: true, color: '#fff', path: "client-list" },
  { name: "Profit", icon: <MailOutlineIcon />, path: "profit" },
];

const ClientList = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, padding: '30px' }}>
        <h3 style={{ fontFamily: 'Tektur' }}>Client Table</h3>
        <ClientTable />
      </div>
    </div>

  )
}

export default ClientList
