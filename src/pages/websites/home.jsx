import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import cardImg from "../../Assets/card_image/card-img.jpg"
import eduImg from "../../Assets/card_image/education.jpg"
import bookImg from "../../Assets/card_image/book.jpg"
import flower from "../../Assets/jpeg/fundraising2.jpg"
import "./home.css"
import Footer from '../../components/Footer/Footer'
import { Link, NavLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import DownArrow from '../../Assets/png/DownArrow.png'
import TickMark from '../../Assets/png/TickMark.png'
import Shield from '../../Assets/png/shield.png'
import Shield1 from '../../Assets/png/shield1.png'
import Consultancy from '../../Assets/png/consultancy.png'
import Setup from '../../Assets/png/setup.png'
import Social from '../../Assets/png/social-network.png'
import { useSpring, animated } from 'react-spring';
import { useState, useEffect, useRef } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Cards from '../../components/Cards/Card'
function useIsInViewport(ref) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      setIsInViewport(top < window.innerHeight);
    };

    // Attach event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Call the handleScroll once on component mount to check if it's in view initially
    handleScroll();

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isInViewport;
}

const Home = () => {
  const slideInFromLeftNew = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-100%)' }, config: { duration: 1000 } });


  const stepsRef = useRef();
  const isInViewport = useIsInViewport(stepsRef);


  const slideInFromLeft = useSpring({
    opacity: isInViewport ? 1 : 0,
    transform: isInViewport ? 'translateX(0)' : 'translateX(-100%)',
    config: { duration: 1000 },
  });

  const slideInFromRight = useSpring({
    opacity: isInViewport ? 1 : 0,
    transform: isInViewport ? 'translateX(0)' : 'translateX(100%)',
    config: { duration: 1000 },
  });


  const navigate = useNavigate();

  const clickBtn = () => {
    navigate('/login')
  }

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

  return (
    <div>
      <Navbar link1={<a href="#home"><Tab label="Home" style={{ color: ' #117B34FF', fontWeight: "bold" }} /></a>} link2={<a href="#campaign"><Tab label="Campaigns" style={{ color: ' #117B34FF', fontWeight: "bold" }} /></a>} link3={<a href="#about"><Tab label="About" style={{ color: ' #117B34FF', fontWeight: "bold" }} /></a>} link4={<a href="#how-it-works"><Tab label="How it works" style={{ color: ' #117B34FF', fontWeight: "bold" }} /></a>} link5={<div style={{
        width: '12%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between"
      }}>
        <NavLink to="login">SignIn</NavLink>
        <NavLink className="sigup-btn" to="signup">SignUp</NavLink>
      </div>} />

      <div
        id='home'
        className='main-landing-titles'
      >

        <animated.div style={slideInFromLeftNew} className='landing-title' >
          <h1 >TEST PK</h1>
          <p>"Empowering individuals and communities in pakistan through a dedicated crowdfunding platform, to bridge the financial gap, faster collaboration, and address pressing social causes"</p>
        </animated.div>

        <div className='main-landing-head-btn'>
          <Link to='/login'>
            <button className='landing-head-btn'>
              Start Campaign
            </button>
          </Link>
          <Link to='/login'>
            <button className='landing-head-btn'>
              Donate Now
            </button>
          </Link>
        </div>
      </div>

      <div id='how-it-works'>

        <div style={{ height: '9rem' }} />


        <div className="steps" ref={stepsRef}>
          <div className="left-steps">

            <hr className='line' />


            <div className='one' style={{ marginBottom: '2rem' }}>
              <img src={DownArrow} alt="arrow" className='arrow1-1' />
              <animated.h6 style={slideInFromRight}>Fundraising</animated.h6>
              <animated.p style={slideInFromLeft}>Atiyah is all about fundrising platform similar to gofund me where any one can create their campaign accoridng to their need and raise fund it is basically for paksitani people.</animated.p>
            </div>
            <div className='two' style={{ marginBottom: '2rem' }}>
              <img src={DownArrow} alt="arrow" className='arrow1-2' />
              <animated.h6 style={slideInFromRight}>Create a Campaign</animated.h6>
              <animated.p style={slideInFromLeft}>Just select the purpose of your campaign, write a short description and upload photos. Your campaign will be live within seconds!</animated.p>
            </div>
            <div className='three' style={{ marginBottom: '2rem' }}>
              <img src={DownArrow} alt="arrow" className='arrow1-3' />
              <animated.h6 style={slideInFromRight}>Fundraise</animated.h6>
              <animated.p style={slideInFromLeft}>You can fundraise as an individual or you can get family and friends involved too. Share with them via email, Facebook or Twitter. They don't even need an account!</animated.p>
            </div>
            <div className='four' style={{ marginBottom: '2rem' }}>
              <img src={TickMark} alt="arrow" className='tick1' />
              <animated.h6 style={slideInFromRight}>Get Help from our Team</animated.h6>
              <animated.p style={slideInFromLeft}>We'll take care of everything - we'll support you every step of the way on your fundraising journey</animated.p>
            </div>
          </div>

          <div className="right-steps">
            <img src={flower} alt="flowerimage" />
          </div>
        </div>
      </div>

      <div className="trust-security">
        <div className="sec1">
          <h5 style={{ marginBottom: '2rem', fontSize: '1.4rem' }}>Trust & Security</h5>
          <p>We have your back. <br /> With a team dedicated to trust and safety, we've successfully managed fundraisers worldwide for more than a decade. Don't worry about a thing, we've you covered</p>
        </div>
        <div className="sec2">
          <h5 style={{ marginBottom: '2rem', fontSize: '1.4rem' }}>Atiyah Pk has everything you need</h5>
          <div className="sec2-1">
            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Shield} alt="shield" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Donor Protection Guarantee</h6>
              </div>
              <p>Atiyah Pk has the first and only donor guarantee in the industry</p>
            </div>

            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Setup} alt="Setup" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Simple Setup</h6>
              </div>
              <p>You can personlize and share your Campaign in just a few minutes</p>
            </div>

            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Shield1} alt="shield1" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Secure</h6>
              </div>
              <p>Out Trust & Safety works around the clock to protect against fraud</p>
            </div>
          </div>

          <div className="sec2-2">
            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Social} alt="social" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Social Reach</h6>
              </div>
              <p>Harness the power of social media to spread your story and get more support</p>
            </div>

            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Consultancy} alt="consultancy" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Expert Advice</h6>
              </div>
              <p>Our best in class Customer Care Specialists will answer your questions, day or night</p>
            </div>
          </div>

          <Button onClick={clickBtn} variant="contained" style={{ background: '#117b34' }}>Start a Campaign</Button>

        </div>
      </div>

      <div id='campaign' className='compaigns'>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '2rem'
        }}>
          <h5>Popular Campaigns</h5>
          <Link to='/all-campaigns' className='view-all'><p>view all</p></Link>
        </div>
        <div >
          <Cards data={data} />
        </div>

        <br />
        <br />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '2rem'
        }}>
          <h5>Latest Campaigns</h5>
          <Link to='/all-campaigns' className='view-all'><p>view all</p></Link>
        </div>
        <div >
          <Cards data={data} />
        </div>
      </div>

      <div id='about'>
        <Footer />
      </div>

    </div >
  )
}

export default Home