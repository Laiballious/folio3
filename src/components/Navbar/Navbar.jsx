import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Tabs from '@mui/material/Tabs';
import "./Navbar.css"
import logo from "../../Assets/logos/1.png"
import menuIcon from "../../Assets/logos/menu.png"
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom"
const Navbar = (props, to) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(value)
  return (
    <div className='navbar'>

      <div className='desk-tab'>
        <Tabs className='tabs' style={{ marginTop: '-12px' }}>
          <img className='main-logo' src={logo} alt={logo} />
          {props.link1}
          {props.link4}
          {props.link2}
          {props.link3}
        </Tabs>
      </div>

      <div className='responsive-tab'>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img className='menu-logo' src={menuIcon} alt="menu" />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>{props.link1}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link2}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link3}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link4}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link7}</MenuItem>

          <MenuItem style={{ position: 'relative', bottom: "50px", marginLeft: "17px" }} onClick={handleClose}>{props.login}</MenuItem>

          <MenuItem style={{ position: 'relative', bottom: "50px", marginLeft: "17px" }} onClick={handleClose}>{props.signup}</MenuItem>

        </Menu>
      </div>

      {props.link5}
      {props.search}
    </div>
  )
}

export default Navbar
