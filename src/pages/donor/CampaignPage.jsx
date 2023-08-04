import React, { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar'
import Button from '@mui/material/Button';
import User from '../../Assets/logos/user.png'
import profileIcon from "../../Assets/logos/user.png"
import notiIcon from "../../Assets/logos/notification.png"
import { ProgressBar } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Tab } from '@mui/material'
import { useParams } from 'react-router-dom';
import { GetCampagin } from "../../request/commonAPIs";
import { useNavigate } from "react-router-dom";
export default function CampaignPage() {

    const [campagin ,setCampaign] = useState()
    const { campaignId } = useParams();
    const navigate =useNavigate()

useEffect(()=>{
    GetCampagin(campaignId).then((response)=>{
        if (response?.data.success === true) {
            console.log(response?.data ,"response?.data")
            setCampaign(response.data.data)
          }
    })
},[campaignId])
const handleDonateBtnClick = (campaignId, e) => {
    e.stopPropagation(); // Stop the click event from propagating to the card
    navigate(`/donation/${campaignId}`);
};

    const progressPercentage = (campagin?.amountCollected / campagin?.amountNeeded) * 100;

    return (
        <>
            <div>
                <div className="container-center">
                    <h2 className="campaign-name" style={{ marginLeft: '-3.9rem' }}>{campagin?.campaign ? campagin?.campaign : "Title to be display here"}</h2>
                    <div className="container-cen">
                        <div className="image">
                            <img src={campagin?.ImageURL} alt="CampaignImage" className="campaign-image" />
                            <div className="des-com">
                                <div className="description">
                                    <h6>Decription</h6>
                                    <p>{campagin?.description ? campagin?.description : "Description to be display here"}</p>
                                </div>
                                {/* <div className="comment-section">
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
                                </div> */}
                            </div>
                        </div>
                        <div id="col">
                            <div className="endorsment-sec">
                                <h6 id="progress-data" style={{ margin: "10px auto", fontSize: "15px" }}>
                                    Rs.{campagin?.amountCollected} Raised of Rs.{campagin?.amountNeeded}
                                </h6>
                                <ProgressBar now={progressPercentage} className="pgbar" />
                                <br />
                            </div>
                            <div className="endorsement-btn">
                                <Button variant="contained" style={{ background: "#117b34" }}>Share</Button>
                                <Button variant="contained" style={{ background: "#117b34" }} onClick={(e) => handleDonateBtnClick(campagin?._id, e)} >Donate Now</Button>
                            </div>
                            <p className="a">{campagin?.donations.length} people just donated</p>
                            <div className="recent-donations">
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