import React from 'react';
import { Box, TextField } from '@mui/material';
import Comment from './comment';
import userImg from '../../Assets/png/3.jpg'
import send from '../../Assets/png/send-message.png'

const comments = [{
  userName: "Danish",
  comment: "All comments will display here All comments will display here All comments will display here All comments will display here All comments will display here",
  userImg: userImg
},
{
  userName: "Awais",
  comment: "All comments will display here",
  userImg: userImg
},
{
  userName: "Hamza",
  comment: "All comments will display here",
  userImg: userImg
}
]

const CommentBox = () => {
  return (
    <>
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
        <div style={{ height: '27rem', overflowY:'auto' }}>
          <h3 style={{ marginBottom: "20px" }}>Comments </h3>
          <Comment comments={comments} />
        </div>

        <div style={{ display: 'flex' }}>
          <TextField id="standard-basic" label="Standard" variant="standard" style={{ width: '20rem', marginLeft: '16px' }} />
          <div style={{ display: 'flex', alignItems: 'end', marginLeft: '10px' }}>
            <img src={send} alt="send" style={{ width: "20px", height: "20px", cursor: 'pointer' }} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default CommentBox;
