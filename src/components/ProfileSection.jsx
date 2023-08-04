import React, { useState } from 'react';
import Button from './button/button';
import User from '../Assets/logos/user.png'
import { useEffect } from 'react';
import { UpdateProfile } from '../request/commonAPIs';
import { setUser } from '../store/userSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { UpdatePassword } from '../request/commonAPIs';
import { ToastContainer } from 'react-toastify';

const Profile = () => {
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  const [previewProfilePicture, setPreviewProfilePicture] = useState(null);
  const [restPassword, setRestPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
});
  const [userData, setUserData] = useState({
    name: "",
    profession: "",
    location: "",
    bio: "",
});

const user = useSelector((state) => state.user.user);   
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaTag);
    setUserData({  
    name: user.name,
    profession: user.profession,
    location: user.location,
    bio: user.bio
    ,})
  }, []);

  const dispatch = useDispatch()
  const handleInputChange = (name) => (event) => {
    const { value } = event.target;
    setUserData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handlePasswordChange = (name) => (event) => {
  const { value } = event.target;
  console.log(name, value)
  setRestPassword((prevData) => ({
      ...prevData,
      [name]: value,
  }));
};

const handleResetPassword =(e)=>{
  e.preventDefault(); 
  const payload={
    currentPassword :restPassword.currentPassword,
    newPassword :restPassword.newPassword, 
    confirmPassword:restPassword.confirmPassword,
    id: user?._id
  }
  console.log(payload,"payload")
  UpdatePassword(payload)
}

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setSelectedProfilePicture(file);
    setPreviewProfilePicture(URL.createObjectURL(file));
  };
  const updateProfile =()=>{
    const payload={
      name: userData.name,
      profession: userData.profession,
      location: userData.location,
      bio: userData.bio,
      id : user?._id
    }
    UpdateProfile(payload).then((resposne)=>{
      dispatch(setUser(resposne.data.updatedProfile))
      setUserData(
{
          name:resposne.data.updatedProfile.name,
        profession:resposne.data.updatedProfile.profession,
        location :resposne.data.updatedProfile.location,
        bio: resposne.data.updatedProfile.bio
}      )
      console.log(resposne.data.updatedProfile)
    })
  }

  const updateProfilePicture = () => {
    if (!selectedProfilePicture) {
      return; // No profile picture selected, do nothing
    }

    const formData = new FormData();
    formData.append("profilePicture", selectedProfilePicture);

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you handle profile picture updates on the server
    fetch("YOUR_API_ENDPOINT", formData)
      .then((response) => {
        // Handle success response, e.g., show a success message
        console.log("Profile picture updated successfully!");

        // After the update is successful, you can update the profile picture on the frontend
        // Assuming you have the URL to the updated profile picture
        // Replace 'NEW_PROFILE_PICTURE_URL' with the actual URL of the updated profile picture
        const newProfilePictureURL = "NEW_PROFILE_PICTURE_URL";
        setSelectedProfilePicture(newProfilePictureURL);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error updating profile picture:", error);
      });
  };

  const containerStyle = {
    position: 'absolute',
    left: '261px',
    width: '312px',
    height: '300px',
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
  }

  const textStyle = {
    position: 'absolute',
    top: '184px',
    left: '102px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#EB6769FF',
  };

  const textPro = {
    position: 'absolute',
    top: '210px',
    left: '102px',
    fontFamily: 'Poppins',
    fontSize: '15px',
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
    textAlign: "center"
  };

  const textboxInputStyle = {
    width: '256px',
    height: '36px',
    paddingLeft: '12px',
    paddingRight: '34px',
    fontFamily: 'Mulish',
    fontSize: '14px',
    background: '#a3a3a3ff',
    borderRadius: '6px',
    borderWidth: '0px',
    outline: 'none',
  };

  const buttonStyle = {
    width: '9rem',
    height: '2rem',
    color: 'white',
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "30px", margin: 'auto' }}>
        <div style={containerStyle} className="container">
          <div style={avatarStyle} className="avatar">
            <label htmlFor="profilePictureInput">
              <img src={previewProfilePicture || selectedProfilePicture || User} alt="Avatar" style={avatarImgStyle} />
              <div style={avatarBadgeStyle} className="badge"></div>
            </label>
            <input
              type="file"
              id="profilePictureInput"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={handleProfilePictureChange}
            />
          </div>

          <div style={textStyle} className="text">
            {user?.name}
          </div>
          <div style={textPro} className="text">
            {user?.profession}
          </div>

          <div style={infoTextStyle} className="text">
            {user?.bio}
          </div>

          <div style={profileContainerStyle} className="container">
            <h3 style={{ display: 'flex', justifyContent: 'center', margin: '1rem', }}>Profile</h3>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h5>Full Name</h5>
                <input type="text" id="fullName"   value={userData.name} handleInputChange onChange={handleInputChange("name")} style={{ ...textboxInputStyle, width: '800px' }} />
              </div>
            </div>

            <h5 style={{ marginTop: '1rem' }}>Profession</h5>
            <div>
              <input type="text" style={{ ...textboxInputStyle, width: '800px' }}   value={userData.profession} onChange={handleInputChange("profession")}/>
            </div>


            <h5 style={{ marginTop: '1rem' }}>Location</h5>
            <div>
              <input type="text"   value={userData.location} onChange={handleInputChange("location")} style={{ ...textboxInputStyle, width: '800px' }} />
            </div>

            <h5 style={{ marginTop: '1rem' }}>Bio</h5>
            <div>
              <textarea   value={userData.bio} onChange={handleInputChange("bio")} style={{ ...textboxInputStyle, height: '100px', paddingTop: '7px', paddingBottom: '7px', width: '800px' }}></textarea>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem', marginTop: '1rem' }}>
              <Button BGcolor="#117b34" color="#ffffff" className="button" onClick={updateProfile}>Save Information</Button>
            </div>

            <hr />

            <h3 style={{ display: 'flex', justifyContent: 'center', margin: '1rem', }}>Reset Password</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="CurrentPassword" >Current Password</label>
                <input type="password"  onChange={handlePasswordChange("currentPassword")}  id="CurrentPassword" style={{ ...textboxInputStyle }} required/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="NewPassword">New Password</label>
                <input type="password" onChange={handlePasswordChange("newPassword")}  id="NewPNewassword" style={{ ...textboxInputStyle }} required/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="password" onChange={handlePasswordChange("confirmPassword")}  id="ConfirmPassword" style={{ ...textboxInputStyle }} required/>
              </div>
            </div>

            <div className="line"></div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
              <Button BGcolor="#117b34" color="#ffffff" marginBottom='2rem' className="button"   onClick={(e) => handleResetPassword(e)}>Update Password</Button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
