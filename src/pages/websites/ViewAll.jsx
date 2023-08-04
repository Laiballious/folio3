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

const ViewAll = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const data = [
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Aslam",
            description: "Request for Education",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: bookImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Aslam",
            description: "Request for Education",
            rating: "4.8",
            price: "4000 PKR"
        },
        {
            images: bookImg,
            title: "Shaheen",
            description: "Request for book",
            rating: "4.9",
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.5",
            price: "10000 PKR"
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
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
            <h4 style={{ marginLeft: "30px", marginTop: '2rem', fontFamily: 'Tektur' }}>Choose Campaigns</h4>
            <div style={{ margin: "30px" }}>
                <Cards data={data} />
            </div>
            <Footer />
        </div>
    );
};

export default ViewAll
