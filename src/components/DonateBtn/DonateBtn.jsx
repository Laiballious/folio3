import { Link } from "react-router-dom"
import "./donatebtn.css"
import React, { useEffect } from 'react'
import { DonateNow } from "../../request/donorAPIs" 
import { useNavigate } from "react-router-dom"
const DonateBtn = (payload) => {
const navigate = useNavigate()
    const HandleClick =()=>{
        navigate("/donation")
}
    return (
        // <Link to="/login">
            <button className="button" onClick={HandleClick}>
                <p className="text" style={{cursor: 'pointer'}}>Donate Now</p>
            </button>
        // </Link>
    )
}

export default DonateBtn
