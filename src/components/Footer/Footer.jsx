import React from "react";
import "./footer.css"
import Logo from '../../Assets/transparent/1.png'
import { Button } from "@mui/material";
import Facebook_bw from '../../Assets/logos/facebook.png'
import Twitter_bw from '../../Assets/logos/twitter.png'
import LinkedIn_bw from '../../Assets/logos/linkedin.png'
import Youtube_bw from '../../Assets/logos/youtube.png'
import Mail from '../../Assets/logos/mail.png'

export default function Footer() {
    return (
        <>
            <div className="main-foot">
                <div className="footer-box" style={{ backgroundColor: "white", marginTop: "20px", border: "none", display: "flex", justifyContent: "space-around", width: "100%" }} >
                    <div>
                        <img src={Logo} alt="logo" className="footer-logo" />
                    </div>
                    <div className="main-footer-contents">
                        <div className="footer-contents">
                            <h6>Products</h6>
                            <p>Features</p>
                            <p>Pricing</p>
                        </div>
                        <div className="footer-contents">
                            <h6>Resources</h6>
                            <p>Blogs</p>
                            <p>User Guides</p>
                            <p>Webinars</p>
                        </div>
                        <div className="footer-contents">
                            <h6>Company</h6>
                            <p>About</p>
                            <p>Join Us</p>
                        </div>
                    </div>
                    <div>
                        <div >
                            <h5>Subscribe to our Newsletter</h5>
                            <p>For Product annoucments and exclusive insights</p>
                            <div className="email-group">
                                <div className="email">
                                    <img src={Mail} alt="" className="mail-icon" />
                                    <input type="text" id="email" name="email" placeholder="Input your Email" />
                                </div>
                                <Button variant="contained" id="subscribe-btn" style={{ background: '#117b34' }}>Subscribe</Button>
                            </div>
                            <br />

                        </div>
                    </div>
                </div>
                <div className="footer-copyright-content">
                    <div>
                        <select className='drop-footer-btn' name="" id="">
                            <option value="">English</option>
                        </select>
                    </div>
                    <div>
                        <h6>©2023 Atiyah Ltd . Privacy . Terms . sidemap</h6>
                    </div>
                    <div className="footer-icon">
                        <img src={Twitter_bw} alt="" className="t-logo" />
                        <img src={Facebook_bw} alt="" className="fb-logo" />
                        <img src={LinkedIn_bw} alt="" className="li-logo" />
                        <img src={Youtube_bw} alt="" className="yt-logo" />
                    </div>
                </div>

            </div >
        </>
    )
}