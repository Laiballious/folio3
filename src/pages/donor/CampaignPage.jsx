import React, { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar'
import User from '../../Assets/logos/user.png'
import profileIcon from "../../Assets/logos/user.png"
import notiIcon from "../../Assets/logos/notification.png"
import { ProgressBar } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Tab } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import { GetCampagin } from "../../request/commonAPIs";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
export default function CampaignPage() {

    const [campagin, setCampaign] = useState()
    const { campaignId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        GetCampagin(campaignId).then((response) => {
            if (response?.data.success === true) {
                setCampaign(response.data.data)
            }
        })
    }, [campaignId])
    const handleDonateBtnClick = (campaignId, e) => {
        e.stopPropagation(); // Stop the click event from propagating to the card
        navigate(`/donation/${campaignId}`);
    };

    const progressPercentage = (campagin?.amountCollected / campagin?.amountNeeded) * 100;

    return (
        <>
            <Navbar
                link1={<Link to='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold", marginTop: '10px', fontFamily: 'Cinzel', fontSize: '17px' }} /></Link>}
                link2={<Link to='my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold", marginTop: '10px', fontFamily: 'Cinzel', fontSize: '17px' }} /></Link>}
                search=
                {<div style={{
                    width: "10%",
                    display: "flex",
                    marginRight: "22px",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img style={{ width: "25px", height: "25px" }} src={notiIcon} alt="noti" /> <img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" /></div>} />

            <div>
                <div className="container-center">
                    <h2 className="campaign-name" style={{ marginLeft: '-3.9rem', fontFamily: 'Tektur' }}>{campagin?.campaign ? campagin?.campaign : "Title to be display here"}</h2>
                    <div className="container-cen">
                        <div className="image">
                            <img src={campagin?.ImageURL} alt="CampaignImage" className="campaign-image" />
                            <div className="des-com">
                                <div className="description">
                                    <h6 style={{ fontFamily: 'Tektur' }}>Decription</h6>
                                    <p style={{ fontFamily: 'Edu SA Beginner' }}>{campagin?.description ? campagin?.description : "Description to be display here"}</p>
                                </div>
                                <div className="comment-section" style={{ fontFamily: 'Playfair Display SC' }}>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="col">
                            <div className="endorsment-sec">
                                <h6 id="progress-data" style={{ margin: "10px auto", fontSize: "15px", fontFamily: 'Libre Baskerville' }}>
                                    Rs.{campagin?.amountCollected} Raised of Rs.{campagin?.amountNeeded}
                                </h6>
                                <ProgressBar now={progressPercentage} className="pgbar" />
                                <br />
                            </div>
                            <div className="endorsement-btn">
                                <Button BGcolor={'#117b34'} color={'white'}>Share</Button>
                                <Button BGcolor={'#117b34'} color={'white'} onClick={(e) => handleDonateBtnClick(campagin?._id, e)} >Donate Now</Button>
                            </div>
                            <p className="a" style={{ fontFamily: 'Libre Baskerville' }}>{campagin?.donations.length} people just donated</p>
                            <div className="recent-donations" style={{ fontFamily: 'Libre Baskerville' }}>
                                {/* <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b></p>
                                </div>
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b></p>
                                </div>
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b></p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}