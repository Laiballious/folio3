import React from 'react'
import icon from "../../../../Assets/logos/check-button.png"
import { useNavigate } from 'react-router-dom'
const Updated = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/login');
  };
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ boxShadow: "1px 1px 1px rgb(9, 255, 9)", width: "35%", height: "350px", border: "1px solid green", display: "flex", flexDirection: "column", padding: "20px", justifyContent: "space-around", alignItems: "center" }}>
        <h2 style={{fontFamily: 'Edu SA Beginner'}}>Password Updated</h2>
        <img style={{ width: "40px", height: "40px" }} src={icon} alt="" />
        <p style={{fontFamily: 'Edu SA Beginner'}}>Your password has been updated</p>
        <button
          style={{
            borderRadius: "8px",
            boxShadow: "1px 1px 1px rgb(9, 255, 9)",
            border: "1px solid rgb(9, 255, 9)",
            color: "white",
            width: "100px",
            height: "30px",
            backgroundColor: "#117b34ff",
            fontFamily: 'Edu SA Beginner',
          }}
          onClick={handleButtonClick}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Updated
