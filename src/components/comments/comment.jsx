import React from "react";
// import { Box } from "@mui/material";

const Comment = ({ comments }) => {
  return (
    <>
      {comments.map((item, index) => {
        return (
          <div div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "15px",
              marginBottom: "10px",
              backgroundColor: "#FAFAFBFF",
              borderRadius: "12px",
              padding: "10px",
            }}
          >
            <div>
              <img
                src={item.userImg} // Replace with the actual profile image source
                alt="Profile"
                style={{
                  width: "44px",
                  height: "44px",
                  // objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "50%",
                  border: "2px solid #000",
                }}
              // onClick={handleNameClick}
              />
            </div>
            <div key={item._id}>
              <h6
                style={{
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "block",
                  margin: "0px",
                  fontFamily: 'Edu SA Beginner'
                }}
              // onClick={handleNameClick}
              >
                {item.userName}
              </h6>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6e6b6a",
                  cursor: "pointer",
                  margin: "0px",
                  fontFamily: 'Edu SA Beginner'
                }}
              >
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comment;
