import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
import cardImg from "../../Assets/card_image/card-img.jpg"
import eduImg from "../../Assets/card_image/education.jpg"
import bookImg from "../../Assets/card_image/book.jpg"
import Navbar from '../../components/Navbar/Navbar'
import searchIcon from "../../Assets/logos/search.png"
import notiIcon from "../../Assets/logos/notification.png"
import profileIcon from "../../Assets/logos/user.png"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom';
import { ViewAllCampaigns } from '../../request/commonAPIs'
const ViewAll = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [campaigns, setCampaigns] = React.useState([]);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        ViewAllCampaigns().then((response)=>{
            setCampaigns(response?.data.campaigns)
          console.log(response?.data.campaigns)
        })
    }, []);

    return (
        <div>
            <Navbar search={<div><Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            ><img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" /></Button>
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
                    <NavLink to="/donor/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </NavLink>

                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem onClick={handleClose}>logout</MenuItem>
                    </NavLink>


                </Menu></div>} />
            <h4 style={{ marginLeft: "30px", marginTop: '2rem' }}>Choose Campaigns</h4>
            <div style={{ margin: "30px" }}>
                <Cards data={campaigns} />
            </div>
            <Footer />
        </div>
    );
};

export default ViewAll
