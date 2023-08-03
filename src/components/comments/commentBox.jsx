import React from 'react';
import { Box } from '@mui/material';
import Comment from './comment';
// import userImg from '../../Assets/png/3.jpg'
// const comments = [{
//   userName: "Danish",
//   comment: "All comments will display here All comments will display here All comments will display here All comments will display here All comments will display here",
//   userImg: userImg
// },
// {
//   userName: "Awais",
//   comment: "All comments will display here",
//   userImg: userImg
// },
// {
//   userName: "Hamza",
//   comment: "All comments will display here",
//   userImg: userImg
// }
// ]

const CommentBox = ({comments}) => {
  return (
    <Box
      sx={{
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '10px',
        minWidth: "300px",
        width: "100%",
        height: "500px",
        backgroundColor: "#FFFFFFFF",
        borderWidth: "1px",
        borderColor: "#F3F4F6FF",
        borderStyle: "solid"
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Comments </h3>
      <Comment comments={comments} />
    </Box>
  );
};

export default CommentBox;
