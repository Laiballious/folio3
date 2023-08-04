import { Link } from "react-router-dom"
import "./donatebtn.css"
import React, { useEffect } from 'react'
import { DonateNow } from "../../request/donorAPIs" 
import { useNavigate } from "react-router-dom"
const DonateBtn = () => {
// const navigate = useNavigate()
//     const HandleClick =()=>{
//         navigate(`/donation/${id}`)
// }
    return (
            <button className="button">
                <p className="text" style={{cursor: 'pointer'}}>Donate Now</p>
            </button>
    )
}

export default DonateBtn
