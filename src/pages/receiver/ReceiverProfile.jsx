import React from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import Sidebar from '../../components/Sidebar/drawer';
import ProfileSection from '../../components/ProfileSection';

const data = [
    { name: "Home", icon: <HomeOutlinedIcon />, path: "" },
    { name: "My Campaigns", icon: <InboxOutlinedIcon />, path: "myCampaigns", },
];

export default function ReceiverProfile() {
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