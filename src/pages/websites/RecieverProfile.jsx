import React from 'react';
import Sidebar from "../../components/Sidebar/drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { useEffect } from 'react';



const data = [
  // { name: "Dashboard", icon: <HomeOutlinedIcon />, active: true, color: "#fff", path: "", },
  { name: "My Campaigns", icon: <InboxOutlinedIcon /> },
  { name: "My Profile", icon: <PersonOutlinedIcon />, path: "" },
  { name: "Analytics", icon: <BarChartOutlinedIcon />, path: "" },
  { name: "Comments", icon: <CommentOutlinedIcon /> },
];

const ReceiverProfile = () => {
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaTag);
  }, []);



  const containerStyle = {
    position: 'absolute',
    top: '100px',
    left: '261px',
    width: '312px',
    height: '428px',
    background: '#FFFFFFFF',
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: '#DEE1E6FF',
    borderStyle: 'solid',

  };
  const profileContainerStyle = {
    position: 'absolute',
    top: '0px',
    left: '320px', // Adjust the left position as needed
    width: '832px',
    height: '900px',
    background: '#FFFFFFFF',
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: '#DEE1E6FF',
    borderStyle: 'solid',
  };

  if (window.innerWidth <= 768) {
    containerStyle.position = 'static';
    containerStyle.margin = '0 auto';
    containerStyle.width = '100%';
    containerStyle.top = '0';
    containerStyle.left = '0';

    profileContainerStyle.position = 'static';
    profileContainerStyle.margin = '0 auto';
    profileContainerStyle.width = '100%';
    profileContainerStyle.top = '0';
    profileContainerStyle.left = '0';
  }

  const avatarStyle = {
    position: 'absolute',
    top: '28px',
    left: '86px',
    width: '140px',
    height: '140px',
    background: '#C5D0F5FF',
    opacity: '1',
    overflow: 'hidden',
    borderRadius: '70px',
  };

  const avatarImgStyle = {
    width: '140px',
    height: '140px',
  };

  const avatarBadgeStyle = {
    width: '35px',
    height: '35px',
    borderRadius: '17.5px',
  };

  const activeAvatarBadgeStyle = {
    background: '#000000FF',
    opacity: '0',
    borderWidth: '1.5px',
    borderColor: '#FFFFFFFF',
  };

  const inactiveAvatarBadgeStyle = {
    background: '#000000FF',
    opacity: '0',
    borderWidth: '1.5px',
    borderColor: '#FFFFFFFF',
  };

  const idleAvatarBadgeStyle = {
    background: '#000000FF',
    opacity: '0',
    borderWidth: '1.5px',
    borderColor: '#FFFFFFFF',
  };

  const doNotDisturbAvatarBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '35px',
    lineHeight: '35px',
    color: '#FFFFFFFF',
    background: '#000000FF',
    opacity: '0',
    borderWidth: '1.5px',
    borderColor: '#FFFFFFFF',
  };

  const textStyle = {
    position: 'absolute',
    top: '184px',
    left: '102px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#EB6769FF',
  };

  const infoTextStyle = {
    position: 'absolute',
    top: '256px',
    left: '28px',
    width: '256px',
    fontFamily: 'Mulish',
    fontSize: '14px',
    lineHeight: '22px',
    color: '#9095A0FF',
  };

  const textboxStyle = {
    position: 'absolute',
    top: '341px',
    left: '28px',
    opacity: '1',
  };

  const textboxInputStyle = {
    width: '256px',
    height: '36px',
    paddingLeft: '12px',
    paddingRight: '34px',
    fontFamily: 'Mulish',
    fontSize: '14px',
    background: '#F3F4F6FF',
    borderRadius: '6px',
    borderWidth: '0px',
    outline: 'none',
  };

  const textboxIconStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '16px',
    height: '16px',
    fill: '#171A1FFF',
  };

  const textboxLabelStyle = {
    fontSize: '14px',
    lineHeight: '22px',
  };

  const textboxHoverStyle = {
    color: '#171A1FFF',
    background: '#F3F4F6FF',
  };

  const textboxFocusedStyle = {
    color: '#171A1FFF',
    background: '#FFFFFFFF',
  };

  const textboxDisabledStyle = {
    color: '#171A1FFF',
    background: '#F3F4F6FF',
  };

  const disabledIconStyle = {
    fill: '#171A1FFF',
  };



  const headingStyle = {
    fontFamily: 'Poppins',
    fontSize: '24px',
    lineHeight: '36px',
    color: '#171A1FFF',
    marginTop: '20px',
    marginLeft: '20px',
  };

  const subHeadingStyle = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#171A1FFF',
    marginTop: '20px',
    marginLeft: '20px',
  };
  const buttonStyle = {
    position: 'absolute',
    top: '700px',
    left: '636px',
    width: '168px',
    height: '44px',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Mulish',
    fontSize: '16px',
    lineHeight: '26px',
    color: '#FFFFFFFF',
    background: '#EB6769FF',
    opacity: '1',
    border: 'none',
    borderRadius: '6px',
  };

  return (


    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 250px", marginRight: "30px" }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, padding: "30px" }}>
        <h2 style={{ fontFamily: "Poppins", fontSize: "42px", color: "#171A1FFF", marginBottom: "10px", marginTop: "20px" }}>My Profile</h2>
        <div style={containerStyle} className="container">
          <div style={avatarStyle} className="avatar">
            <img src={require('../../Assets/logos/user.png').default} alt="Avatar" style={avatarImgStyle} />
            <div style={avatarBadgeStyle} className="badge"></div>
          </div>

          <div style={textStyle} className="text">
            Laiba Khan
          </div>

          <div style={infoTextStyle} className="text">
            My name is Laiba and I am a student
          </div>

          <div style={textboxStyle} className="textbox">
            <h5>Profile Link</h5>
            <input type="text" style={textboxInputStyle} />
            <svg style={textboxIconStyle}>
              <path d="..." />
            </svg>
          </div>

          <div style={profileContainerStyle} className="container">
            <h3 style={headingStyle}>Profile</h3>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '20px' }}>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" style={{ ...textboxInputStyle, marginLeft: '8px' }} />
              </div>
              <div>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" style={{ ...textboxInputStyle, marginLeft: '8px' }} />
              </div>
            </div>


            <h5 style={subHeadingStyle}>Profession</h5>
            <div>
              <input type="text" style={{ ...textboxInputStyle, width: '800px' }} />
            </div>


            <h5 style={subHeadingStyle}>Location</h5>
            <div>
              <input type="text" style={{ ...textboxInputStyle, width: '800px' }} />
            </div>

            <h5 style={subHeadingStyle}>Bio</h5>
            <div>
              <textarea style={{ ...textboxInputStyle, height: '100px', paddingTop: '7px', paddingBottom: '7px', width: '800px' }}></textarea>
            </div>

            <div className="line"></div>

            <h3 style={headingStyle}>Account</h3>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '20px' }}>
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" style={{ ...textboxInputStyle, marginLeft: '8px' }} />
              </div>
              <div>
                <label htmlFor="Password">Password</label>
                <input type="text" id="Password" style={{ ...textboxInputStyle, marginLeft: '8px' }} />
              </div>
            </div>

            <div className="line"></div>

            <h3 style={headingStyle}>Preferences</h3>
            <div style={{ marginBottom: '8px' }}>
              <input type="checkbox" id="checkbox1" style={{ marginRight: '8px' }} />
              <label htmlFor="checkbox1">Recieve daily donations </label>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <input type="checkbox" id="checkbox2" style={{ marginRight: '8px' }} />
              <label htmlFor="checkbox2">See info about people who viewed you profile </label>
            </div>
            <button style={buttonStyle} className="button">Save Information</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiverProfile;
