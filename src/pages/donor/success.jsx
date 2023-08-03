import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import img from "../../Assets/jpeg/child.jpg";
import img2 from "../../Assets/transparent/1.png";


export default function ThankYouPage() {
  const handleBackClick = () => {
    // Handle back button click here
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" color="info" aria-label="back" onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <img src={img2} alt="Logo" style={{ width: '100px' }} />
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ paddingTop: '2rem' }}>
        <Card variant="outlined">
          <CardContent>
            {/* Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={img} alt="Campaign_description" style={{ width: '400px', height: 'auto' }} />
            </div>

            {/* Thank you message */}
            <Typography variant="h3" component="div" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '2rem', color: 'black' }}>
              All done, Thank you for helping username!
            </Typography>

            {/* Today's Date */}
            <Typography variant="h5" component="div" gutterBottom style={{ textAlign: 'center', color: 'black' }}>
              Today's Date: {new Date().toLocaleDateString()}
            </Typography>

            {/* Divider */}
            <Divider style={{ margin: '2rem 0' }} />

            {/* Amount Paid */}
            <Typography variant="h6" component="div" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
              Amount Paid: $100
            </Typography>

            {/* Divider */}
            <Divider style={{ margin: '2rem 0' }} />

            {/* Fundraising Campaign Description */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={img} alt="Campaign_description" style={{ marginRight: '20px', width: '150px', height: 'auto' }} />
              <div>
                <Typography variant="h5" component="div" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                  Title
                </Typography>
                <Typography variant="h6" component="div" gutterBottom style={{ color: 'black' }}>
                  Subtitle
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="subtitle1" component="div" style={{ color: 'black', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} AtiyahPK. All rights reserved.
          </Typography>
          <Typography variant="subtitle1" component="div" style={{ color: 'black', fontSize: '0.9rem' }}>
            Company Address, Karachi, Pakistan
          </Typography>
        </div>
      </Container>
    </>
  );
}
