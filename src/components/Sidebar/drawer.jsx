import React from "react";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Logo from "../../Assets/transparent/1.png";
import Profile from "./profile";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ data }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      <div className="logo" style={{ height: 100, position: "relative", marginLeft: "10px", width: '7rem' }}>
        <img
          src={Logo}
          alt="Atiyah.pk"
          style={{ borderRadius: "50%", width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ width: 200, margin: "0 auto" }}>
        {data.map((item, index) => (
          < ListItem
            button
            key={index}
            style={{
              color: item.color,
              borderRadius: "6px",
              backgroundColor: item.active ? "#117b34" : "transparent",
              height: "30px",
              padding: "20px 16px",
            }}
            onClick={() => {
              if (item.name === 'Dashboard' ||item.name === 'Donors' || item.name === 'Client' ||item.name === 'Profit' ||item.name === 'Setting') {
                navigate(`/admin/${item.path}`)
              }else if(item.name === 'My Campaigns' || item.name === 'Home' ){
                navigate(`/receiverDashboard/${item.path}`)
              }
            }}
          >
            <ListItemIcon style={{ color: item.color }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    </div >
  );

  return (
    <>
      <Drawer
        open={open}
        variant="permanent"
        anchor={"left"}
        onClose={() => setOpen(false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div>
            {getList()}
            <Divider />
          </div>
          <div style={{ marginTop: 'auto', marginLeft: '20px', marginBottom: '20px' }}>
            <Profile />
          </div>
        </div>

      </Drawer>
    </>
  );
};

export default Sidebar;