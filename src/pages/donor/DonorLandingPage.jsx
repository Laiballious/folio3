import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
import profileIcon from "../../Assets/logos/user.png"
import { Tab } from '@mui/material'
import "./donorLanding.css"
import { useSpring, animated, a } from 'react-spring';
import { GetAllActiveCampagins } from '../../request/donorAPIs'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom'
import logo from "../../Assets/logos/1.png"
import menuIcon from "../../Assets/logos/menu.png"
import "../../components/Navbar/Navbar.css"
import { Link } from 'react-router-dom'
const DonorLandingPage = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const slideInFromLeftNew = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-100%)' }, config: { duration: 1000 } });
  const [newCampaigns, setNewCampaigns] = useState()
  const [popularCampaigns, setPopularCampaigns] = useState()
  useEffect(() => {
    GetAllActiveCampagins().then((response) => {
      setNewCampaigns(response.data.newCampaigns)
      setPopularCampaigns(response.data.popularCampaigns)
    })
  }, [])
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#009b36", padding: "50px" }}>
      <Navbar
        link1={<Link to='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold", marginTop: '10px', fontFamily: 'Cinzel', fontSize: '17px' }} /></Link>}
        link2={<Link to='/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold", marginTop: '10px', fontFamily: 'Cinzel', fontSize: '17px' }} /></Link>}
        search={<div><Button
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
              <MenuItem style={{ position: "relative", bottom: "20px" }} onClick={handleClose}>Profile</MenuItem>
            </NavLink>

            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem style={{ color: "red" }} onClick={handleClose}>Logout</MenuItem>
            </NavLink>


          </Menu></div>} login={<a href="/donor-profile">Profile</a>} signup={<a href='/'>Logout</a>} />
      < div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#009b36", padding: "50px" }}>
        <animated.div style={slideInFromLeftNew} className='donor-landing-title' >
          <h1 style={{ fontFamily: 'Tektur' }}>ATIYAH PK</h1>
          <p style={{ fontFamily: 'Libre Baskerville' }}>Welcome to our Atiyah PK, where you can explore and support a diverse range of impactful campaigns. On our website, you will find two compelling sections: "Popular Campaigns" and "Latest Campaigns."</p>
        </animated.div>
      </div >
      <div className='new-campaigns'>
        <h4 style={{ fontFamily: 'Tektur' }}>New Campaigns</h4>
        <p style={{ fontFamily: 'Libre Baskerville' }}>For those who crave fresh opportunities to make a positive impact, our "Latest Campaigns" section is the perfect destination. Here, you'll find a stream of brand-new campaigns, each with a unique mission and story to tell. From empowering individuals in need to fostering innovation and creativity, these campaigns represent the ever-growing tapestry of causes that our community champions. Be among the first to lend your support and witness the incredible potential of these emerging initiatives.</p>
        <Link to='all-campaigns' className='view-all' style={{ fontFamily: 'Libre Baskerville' }}><p>view all</p></Link>
        <Cards data={newCampaigns} />

      </div>
      <div className='popular-campaigns'>
        <h4 style={{ fontFamily: 'Tektur' }}>Popular Campaigns</h4>
        <p style={{ fontFamily: 'Libre Baskerville' }}>In the "Popular Campaigns" section, you'll discover a selection of the most trending and successful fundraising initiatives on our platform. These campaigns have touched the hearts of countless individuals and have garnered widespread support from our caring community. Whether it's a heartwarming story of resilience, a groundbreaking community project, or a life-changing cause, these campaigns have captured the attention of donors who believe in making a difference. Explore these campaigns to witness the power of collective giving and be inspired to contribute to causes that resonate with you.</p>

        <Link to='all-campaigns' className='view-all' style={{ fontFamily: 'Libre Baskerville' }}><p>view all</p></Link>
        <Cards data={popularCampaigns} />

      </div>
      <Footer />
    </div >
  )
}

export default DonorLandingPage

