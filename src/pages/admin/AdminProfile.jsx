import React from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import Sidebar from '../../components/Sidebar/drawer';
import ProfileSection from '../../components/ProfileSection';

const data = [
    { name: "Dashboard", icon: <HomeOutlinedIcon />, active: true, color: '#fff', path: "" },
    { name: "Donors", icon: <InboxOutlinedIcon />, path: "donor-list" },
    { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon />, path: "client-list" },
    { name: "Profit", icon: <MailOutlineIcon /> },
];

export default function DonorProfile() {
    return (
        <>
        <div>
            <Sidebar data={data} />
        </div>
        <div>
            <ProfileSection />
        </div>
        </>
    )
}