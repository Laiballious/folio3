import React, { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import img from "../../Assets/jpeg/child.jpg";
import img2 from "../../Assets/transparent/1.png";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import InputAdornment from '@mui/material/InputAdornment';
import { DonateNow } from '../../request/donorAPIs';
import { useParams, useNavigate } from 'react-router-dom';
import { GetCampagin } from '../../request/commonAPIs';
import { useSelector } from 'react-redux'
import Button from '../../components/button/button';
// import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Styled components for custom styles
const DonationContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  padding: theme.spacing(2),
}));

const OptionalTipContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  padding: theme.spacing(2),
  width: '50%',
}));

const RefundContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

export default function CreditCardPage() {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [cardHolderName, setCardHolderName] = React.useState('');
  const [saveCard, setSaveCard] = React.useState(false);
  const [donationAmount, setDonationAmount] = React.useState('');
  const [tipAmount, setTipAmount] = React.useState('');
  const [donationCompleted, setDonationCompleted] = React.useState(false);
  const [cardHolderNameError, setCardHolderNameError] = React.useState('');
  const [campagin, setCampaign] = useState()
  const { campaignId } = useParams();

  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user);



  useEffect(() => {
    GetCampagin(campaignId).then((response) => {
      if (response?.data.success === true) {
        console.log(response.data)
        setCampaign(response.data.data)
      }
    })
  }, [campaignId])

  const validateCardNumber = () => {
    const cardNumberRegex = /^\d{13}$/;
    return cardNumberRegex.test(cardNumber);
  };

  const validateExpiryDate = () => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    return expiryDateRegex.test(expiryDate);
  };

  const validateCvc = () => {
    const cvcRegex = /^\d{3}$/;
    return cvcRegex.test(cvc);
  };

  const handleAddCard = () => {
    // Perform final validation checks before adding the card
    if (!validateCardNumber()) {
      alert('Please enter a valid 13-digit card number.');
      return;
    }

    if (!validateExpiryDate()) {
      alert('Please enter a valid expiration date (MM/YY).');
      return;
    }

    if (!validateCvc()) {
      alert('Please enter a valid 3-digit CVC.');
      return;
    }
    if (donationAmountValue <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    if (!cardHolderName.trim()) {
      setCardHolderNameError('Card holder name is required.');
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(cardHolderName)) {
      setCardHolderNameError('Card holder name can only contain alphabets.');
      return;
    }

    // Reset the cardHolderNameError when a valid name is entered
    setCardHolderNameError('');

    // Open the comment dialog after successful validation

    const payload = {
      amount: donationAmount,
      cardHolderName: cardHolderName,
      cardToken: "tok_visa",
      campaignId: campaignId,
      userId: user._id
    }
    DonateNow(payload).then((response) => {
      if (response?.data.success === true) {
        handleOpenCommentDialog();
      }
    })

  };

  const formatCurrency = (amount) => {
    return `Rs.${amount.toFixed(2)}`;
  };

  const handleBackClick = () => {
    navigate(-1)

  };

  const donationAmountValue = parseFloat(donationAmount) || 0;
  const tipAmountValue = parseFloat(tipAmount) || 0;
  const totalAmountDue = donationAmountValue + tipAmountValue;

  const [donationError, setDonationError] = React.useState('');
  const [tipError, setTipError] = React.useState('');

  const MAX_DONATION_AMOUNT = 1000000;
  const MAX_TIP_PERCENTAGE = 0.3;

  const [showCommentDialog, setShowCommentDialog] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [endorsementRating, setEndorsementRating] = React.useState(0);

  const handleOpenCommentDialog = () => {
    setShowCommentDialog(true);
  };

  const handleCloseCommentDialog = (submitted) => {
    setShowCommentDialog(false);
    setDonationCompleted(true);

    setTimeout(() => {
      navigate(`/success/${campaignId}`);
    }, 1500);


  };


  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleEndorsementRatingChange = (newValue) => {
    setEndorsementRating(newValue);
  };

  const handleDonationAmountChange = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    const donationAmountValue = parseFloat(value) || 0;

    if (donationAmountValue > MAX_DONATION_AMOUNT) {
      value = MAX_DONATION_AMOUNT.toString();
      setDonationError(`Donation amount cannot exceed PKR ${MAX_DONATION_AMOUNT}.`);
    } else {
      setDonationError('');
    }

    setDonationAmount(value);
  };

  const handleTipAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    const tipAmountValue = parseFloat(value) || 0;
    const donationAmountValue = parseFloat(donationAmount) || 0;
    const maxTipAmount = donationAmountValue * MAX_TIP_PERCENTAGE;

    if (tipAmountValue > maxTipAmount) {
      setTipError(`Optional tip cannot exceed 30% of donation amount.`);
      setTipAmount(maxTipAmount.toString()); // Set the input to the maximum allowed tip amount
    } else {
      setTipError('');
      setTipAmount(value);
    }
  };


  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton edge="start" color="info" aria-label="back" onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <img src={img2} alt="Logo" style={{ width: '100px' }} />
          </div>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Back
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ paddingTop: '2rem' }}>

        <Card variant="outlined">
          <CardContent>
            {/* <Typography variant="h5" component="div" gutterBottom>
              My Donation
            </Typography>
            <Divider sx={{ marginBottom: '1rem' }} /> */}
            {/* Divider */}
            <Divider style={{ margin: '2rem 0' }} />
            {/* Image with title and subtitle */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={campagin?.ImageURL} alt="Campaign_description" style={{ marginRight: '30px', width: '200px' }} />
              <div>
                <Typography variant="h6" component="div" gutterBottom style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Tektur' }}>
                  You're supporting {campagin?.user.name}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom style={{ color: 'black', fontFamily: 'Tektur' }}>
                  Your donation will benefit {campagin?.user.name}'s {campagin?.category}
                </Typography>
              </div>
            </div>

            {/* Divider */}
            <Divider style={{ margin: '2rem 0' }} />

            {/* Donation Tip Conatiner */}
            <DonationContainer>
              <Typography variant="h6" component="div" gutterBottom style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Tektur' }}>
                Enter Your Donation
              </Typography>
              <OutlinedInput
                value={donationAmount}
                onChange={handleDonationAmountChange}
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <Typography variant="body1" style={{ color: 'black', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'Libre Baskerville' }}>
                      PKR
                    </Typography>
                  </InputAdornment>
                }
                sx={{ fontWeight: 'bold', borderRadius: '20px', width: '100%', fontFamily: 'Libre Baskerville' }}
                inputProps={{
                  style: {
                    textAlign: 'right', // Cursor will be on the right-most side
                    color: 'black',       // Added color: 'black'
                    fontSize: '1.2rem',   // Added fontSize: '1.2rem'
                    fontWeight: 'bold',   // Added fontWeight: 'bold'
                  },
                }}
              />
              {donationError && (
                <Typography variant="subtitle2" component="div" style={{ color: 'red', fontSize: '0.9rem', fontFamily: 'Zilla Slab' }}>
                  {donationError}
                </Typography>
              )}
            </DonationContainer>

            {/* Additional text */}
            <Typography variant="subtitle1" component="div" gutterBottom style={{ color: 'black', fontSize: '1rem', fontFamily: 'Edu SA Beginner' }}>
              AtyiahPk has a 0% platform fee for organizers. AtyiahPk will continue offering its services thanks to
              donors who will leave an optional amount here.
            </Typography>

            {/* Optional tip container */}
            <OptionalTipContainer>
              {/* Tip amount */}
              <Typography variant="h6" component="div" gutterBottom style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Tektur' }}>
                Support AtiyahPK
              </Typography>
              <OutlinedInput
                value={tipAmount}
                onChange={handleTipAmountChange}
                type="text"
                startAdornment={
                  <Typography variant="body1" style={{ color: 'black', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'Libre Baskerville' }}>
                    PKR
                  </Typography>
                }
                sx={{ fontWeight: 'bold', borderRadius: '20px', width: '100%', fontFamily: 'Libre Baskerville' }}
                inputProps={{
                  style: {
                    textAlign: 'right', // Cursor will be on the right-most side
                    color: 'black',       // Added color: 'black'
                    fontSize: '1.2rem',   // Added fontSize: '1.2rem'
                    fontWeight: 'bold',   // Added fontWeight: 'bold'
                  },
                }}
              />
              {tipError && (
                <Typography variant="subtitle2" component="div" style={{ color: 'red', fontSize: '0.9rem', fontFamily: 'Zilla Slab' }}>
                  {tipError}
                </Typography>
              )}
            </OptionalTipContainer>

            {/* Additional text */}
            <Typography variant="subtitle1" component="div" gutterBottom style={{ color: 'black', fontSize: '1rem', fontFamily: 'Edu SA Beginner' }}>
              Adding a AtiyahPK tip means being a key part of improving the services for donors like you and the
              campaigns you support.
            </Typography>

            {/* Divider */}
            <Divider style={{ margin: '2rem 0' }} />
            {/* Payment details */}
            <div>
              <Typography variant="h6" component="div" gutterBottom style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Tektur' }}>
                <br />
                Payment Details
              </Typography>
              <FormControl sx={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
                <FormLabel style={{ fontFamily: 'Libre Baskerville' }}>Card number</FormLabel>
                <Input
                  endDecorator={<CreditCardIcon />}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234567890123"
                  error={!validateCardNumber()}
                  style={{ fontFamily: 'Libre Baskerville' }}
                />
              </FormControl>

              <FormControl sx={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
                <FormLabel style={{ fontFamily: 'Libre Baskerville' }}>Expiry date</FormLabel>
                <Input
                  endDecorator={<CreditCardIcon />}
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  error={!validateExpiryDate()}
                  style={{ fontFamily: 'Libre Baskerville' }}
                />
              </FormControl>
              <FormControl sx={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
                <FormLabel style={{ fontFamily: 'Libre Baskerville' }}>CVC/CVV</FormLabel>
                <Input
                  endDecorator={<InfoOutlined />}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  error={!validateCvc()}
                  style={{ fontFamily: 'Libre Baskerville' }}
                />
              </FormControl>
              <FormControl sx={{ width: '50%', margin: '0 auto' }}>
                <FormLabel style={{ fontFamily: 'Libre Baskerville' }}>Card holder name</FormLabel>
                <Input
                  placeholder="Enter cardholder's full name"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  error={cardHolderNameError !== ''}
                  style={{ fontFamily: 'Libre Baskerville' }}
                />
                {cardHolderNameError && (
                  <Typography variant="subtitle2" component="div" style={{ color: 'red', fontSize: '0.9rem', fontFamily: 'Zilla Slab' }}>
                    {cardHolderNameError}
                  </Typography>
                )}
              </FormControl>


              <Checkbox
                label="Save card"
                sx={{ marginTop: '1rem' }}
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                style={{ fontFamily: 'Edu SA Beginner' }}
              />
            </div>
            <br />
            {/* Donation summary */}
            <div>
              <Typography variant="h6" component="div" gutterBottom style={{ color: 'black', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Tektur' }}>
                Your Donation
              </Typography>
              <Typography variant="subtitle1" component="div" style={{ fontFamily: 'Tektur' }}>
                <span style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>Donation Amount:</span>{' '}
                <span style={{ float: 'right', fontWeight: 'bold', color: 'black', fontSize: '1.2rem' }}>
                  {formatCurrency(donationAmountValue)}
                </span>
              </Typography>
              {tipAmountValue > 0 && (
                <Typography variant="subtitle1" component="div" style={{ fontFamily: 'Tektur' }}>
                  <span style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>Optional Tip:</span>{' '}
                  <span style={{ float: 'right', fontWeight: 'bold', color: 'black', fontSize: '1.2rem' }}>
                    {formatCurrency(tipAmountValue)}
                  </span>
                </Typography>
              )}
              <Typography variant="subtitle1" component="div" style={{ fontFamily: 'Tektur' }}>
                <span style={{ color: 'black', fontWeight: 'bold', fontSize: '1.1rem' }}>Total Due Today:</span>{' '}
                <span style={{ float: 'right', fontWeight: 'bold', color: 'black', fontSize: '1.2rem' }}>
                  {formatCurrency(totalAmountDue)}
                </span>
              </Typography>
            </div>
          </CardContent>
          {/* Divider */}
          <Divider style={{ margin: '2rem 0' }} />
          <CardActions>
            <div style={{margin: 'auto'}}>
              <Button
                BGcolor={'#117b34'}
                color={'white'}
                onClick={handleAddCard}
                disabled={!validateCardNumber() || !validateExpiryDate() || !validateCvc()}
              >
                Donate
              </Button>
            </div>
          </CardActions>

          {/* Comment and Endorsement Dialog */}
          <Dialog open={showCommentDialog} onClose={() => handleCloseCommentDialog(false)}>
            <DialogTitle>Thank you for your donation!</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                label="Leave a comment (optional)"
                value={comment}
                onChange={handleCommentChange}
              />
              <Rating
                name="endorsementRating"
                value={endorsementRating}
                onChange={(event, newValue) => handleEndorsementRatingChange(newValue)}
                precision={1}
                size="large"
                style={{ marginTop: '16px' }}
              />
            </DialogContent>
            <DialogActions>
              <Button BGcolor={'#117b34'} color={'white'} onClick={() => handleCloseCommentDialog(true)}>
                Skip
              </Button>
              <Button BGcolor={'#117b34'} color={'white'} onClick={() => handleCloseCommentDialog(true)} disabled={donationAmountValue === 0}>
                Submit
              </Button>
            </DialogActions>

          </Dialog>

          <br />
          {/* Additional text */}
          <Typography variant="subtitle6" component="div" gutterBottom style={{ color: 'black', fontSize: '0.8rem', fontFamily: 'Edu SA Beginner' }}>
            By continuing, you agree with AtyiahPK terms and privacy notice.
            <br />
            <br />
            Certified Charity donations are made to MASTERCARD/VISA, minus processing fees and granted within 15-45
            days, subject to its terms.
            <br />
            <br />
            In the unlikely event that there is a problem funding your chosen charity, MASTERCARD/VISA will contact you
            before reassigning the funds. Your donation is typically tax deductible in Pakistan.
          </Typography>

          {/* Refund container */}
          <RefundContainer>
            <Typography variant="subtitle1" component="div" gutterBottom style={{ fontWeight: 'bold', fontSize: '0.9rem', fontFamily: 'Edu SA Beginner' }}>
              AtiyahPK protects your donation
              <br />
              We guarantee you a full refund for up to a year in the rare case that fraud occurs.
            </Typography>
          </RefundContainer>



          {/* Footer */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Typography variant="subtitle1" component="div" style={{ fontSize: '0.9rem', fontFamily: 'Playball' }}>
              &copy; {new Date().getFullYear()} AtiyahPK. All rights reserved.
            </Typography>
            <Typography variant="subtitle1" component="div" style={{ fontSize: '0.9rem', fontFamily: 'Playball' }}>
              Company Address, Karachi, Pakistan
            </Typography>
          </div>
        </Card>

      </Container>
      <br />
    </>
  );
}

{/* 
Conditional Redirection use 
----> npm install react-router-dom
*/}
// {donationCompleted && <Redirect to="/success" />}