import React, { useState } from 'react';
import userImg from '../../Assets/png/3.jpg';
// import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import { Block } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import { Logout } from '../../request/authAPIS';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
const Profile = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const dispatch =useDispatch()

  const handleNameClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Logout().then(()=>{
      dispatch(logout());
      localStorage.removeItem('persist:root');
      navigate("/login")
    })
  };

  const open = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '15px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '2px solid #000',
          overflow: 'hidden',
        }}
      >
        <img
          src={userImg} // Replace with the actual profile image source
          alt="Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
          onClick={handleNameClick}
        />
      </div>
      <div>
        <p
          style={{ fontSize: '14px', cursor: 'pointer', display: 'block', margin: '0px' }}
          onClick={handleNameClick}
        >
          User Name
        </p>
        <p
          style={{ fontSize: '12px', color: "#6e6b6a", cursor: 'pointer', margin: '0px' }}
          onClick={handleNameClick}>
          Useremail@gmail.com
        </p>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ bottom: '85px !important;'}}
        className='profile-popover'
      >
        <List>
          <ListItemButton onClick={handleClosePopover}>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton onClick={handleLogout} style={{ color: 'red' }}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Popover>
    </div>
  );
};

export default Profile;
