import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../../../Assets/transparent/1.png"
import googleLogo from '../../../Assets/logos/google.png'
import facebookLogo from '../../../Assets/logos/facebook.png'
import { useNavigate, NavLink } from 'react-router-dom';
import RightPic from '../../../Assets/png/rightpic.jpg'
import { Login } from '../../../request/authAPIS';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/userSlice';
import { loginSuccess } from '../../../store/authSlice';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { FloatingLabel, Form } from 'react-bootstrap';

const defaultTheme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

    const navigate = useNavigate()

    const handlePopoverOpen = (event) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Please fill in both email and password fields.');
            handlePopoverOpen(event);
            return;
        }

        Login({ email, password }).then((response) => {
            if (response?.data.success === true) {
                let user = response.data.user;
                console.log(user,"user")
                dispatch(setUser(user));
                dispatch(loginSuccess());
                setError('');
                setTimeout(() => {
                    navigate("/receiverDashboard");
                }, 1500);
            }
        });
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (!emailValue.includes('@')) {
            setError('Invalid email address. Please enter a valid email.');
        } else {
            setError('');
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    }

    return (
        <>
            <div className='web-body'>
                <div className="left">
                    <ThemeProvider theme={defaultTheme}>
                        <div className="logo-left">
                            <img src={Logo} alt="Atiyah.pk" />
                        </div>
                        <Box id='boX'
                            sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <h2 className='hello'>Hello Again!</h2>
                            <p className='hello2'>Enter your credentials to access your account</p>
                            <div className="third-party">
                                <div className="google" style={{ cursor: 'pointer' }}>
                                    <img src={googleLogo} alt='Google' />
                                </div>
                                <div className="facebook" style={{ cursor: 'pointer' }}>
                                    <img src={facebookLogo} alt='Facebook' />
                                </div>
                            </div>
                        </Box>
                        <Container component="main" maxWidth="xs" id='box'>
                            <CssBaseline />
                            <Form className="login-form" onSubmit={handleSubmit}>
                                <FloatingLabel className="mb-3" controlId="formBasicEmail" label="Email address">
                                    <Form.Control
                                        autoComplete="off"
                                        placeholder="name@example.com"
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel className="mb-3" controlId="formBasicPassword" label="Password">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </FloatingLabel>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                                <Button
                                    style={{
                                        background: "#117b34",
                                    }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                            </Form>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forget-pass" variant="body2" id='lg-ending'>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <NavLink to="/signup" id='signUP'>
                                        {"Don't have an account? Sign Up"}
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Container>
                    </ThemeProvider>
                </div >
                <div className="right">
                    <img src={RightPic} alt='' />
                </div>
            </div >
            <ToastContainer />
        </>
    );
}
