import React from 'react'
import Sidebar from '../../components/Sidebar/drawer';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const data = [
    { name: "Dashboard", icon: <HomeOutlinedIcon />, path: "" },
    { name: "Donors", icon: <InboxOutlinedIcon />, path: "donor-list" },
    { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon />, path: "client-list" },
    { name: "Profit", icon: <MailOutlineIcon />, active: true, color: '#fff', path: "profit" },
];

const Profit = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
                <Sidebar data={data} />
            </div>
            <div style={{ flex: 1, padding: '30px' }}>
                <h3 style={{ fontFamily: 'Tektur' }}>Profit</h3>
                <p>Loading....</p>
            </div>
        </div>
    )
}

export default Profit