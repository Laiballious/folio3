import React, { useRef, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CreateCampagin } from "../../request/receiverAPIS";
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Fundraising1 from "../../Assets/jpeg/fundraising1.jpg";
// import Fundraising2 from "../../Assets/jpeg/fundraising2.jpg";

const CityName = [
    {
        value: 'Khi',
        label: 'Karachi',
    },
    {
        value: 'Isl',
        label: 'Islamabad',
    },
    {
        value: 'Hyd',
        label: 'Hyderabad',
    },
    {
        value: 'Lhr',
        label: 'Lahore',
    },
];

const steps = ['Select City', 'Who are you Raising for', 'Amount', 'Campaign Details', 'Account Details'];

const options = [
    "Animals", "Business", "Community", "Competitions", "Creative",
    "Education", "Emergencies", "Environment", "Events", "Faith"
];

export default function UploadCampaign() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [selectedCity, setSelectedCity] = useState("Khi");
    const [error, setError] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [image, setImage] = useState(null);
    const [campaignData, setCampaignData] = useState({
        amountRaised: "",
        campaignName: "",
        campaignDescription: "",
        accountTitle: "",
        accountNumber: "",
    });
    const navigate = useNavigate()
    const fileInputRef = useRef(null);
        
  const handleFileChange = () => {
    const file = fileInputRef.current?.files[0];
    setImage(file);
  };

    const user = useSelector((state) => state.user.user);   
    const handleFormInputChange = (name) => (event) => {
        const { value } = event.target;

        // Check word count for campaign description
        if (name === "campaignDescription") {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount > 50) {
                setError("Campaign description should not exceed 50 words.");
                return;
            }
        }

        console.log(name, value)
        setCampaignData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setError('');
    };

    const handleCitySelect = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleAmountChange = (event) => {
        const amount = event.target.value;
        setCampaignData((prevData) => ({
            ...prevData,
            amountRaised: amount,
        }));
        setError('');
    };
    const handleSubmit = () => {

        const payload = {
            "city": selectedCity,
            "postalCode": postalCode,
            "fundraiseFor": activeSection,
            "category": selectedOption,
            "campaign": campaignData.campaignName,
            "description": campaignData.campaignDescription,
            "amountNeeded": campaignData.amountRaised,
            "accountTitle": campaignData.accountTitle,
            "accountNumber": campaignData.accountNumber,
            "user": user._id,
            "image": image,
        }
        console.log(payload, "payload")
        CreateCampagin(payload).then((response) => {
            const campaignId = response.data.data._id
            setTimeout(() => {
                navigate(`/campaign-details/${campaignId}`);
            }, 1500);
        })
    };

    const handleOptionSelect = (option) => {
        setSelectedOption((prevSelectedOption) =>
            prevSelectedOption === option ? null : option
        );
    };

    const isSectionValid = (step) => {
        switch (step) {
            case 0:
                return selectedCity && selectedOption && postalCode;
            case 1:
                return activeSection !== null;
            case 2:
                return campaignData.amountRaised !== "";
            case 3:
                return campaignData.campaignName && campaignData.campaignDescription;
            case 4:
                return campaignData.accountTitle && campaignData.accountNumber;
            default:
                return true;
        }
    };

    const isOptionSelected = (option) => {
        return selectedOption === option;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        setError('');

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        const isCurrentSectionValid = isSectionValid(activeStep);
        if (!isCurrentSectionValid) {
            setError("Please complete all fields in the current section.");
            return;
        }

        if (activeStep === 3) {
            const file = fileInputRef.current?.files[0];
            if (file) {
                const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
                if (!allowedFileTypes.includes(file.type)) {
                    setError("Please upload a JPG, JPEG, or PNG image.");
                    return;
                }

                const maxSize = 5 * 1024 * 1024;
                if (file.size > maxSize) {
                    setError("The selected image exceeds the maximum allowed size of 5MB.");
                    return;
                }
            }
        }

        if (activeStep === 4) {
            if (!campaignData.accountNumber || campaignData.accountNumber.length < 8 || campaignData.accountNumber.length > 17) {
                setError("Please enter a valid account number.");
                return;
            }
        }

        if (activeStep === steps.length - 1) {
            handleSubmit();
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        }
    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSectionActivation = (sectionName) => {
        setActiveSection(sectionName);
    };

    const isSectionActive = (sectionName) => {
        return activeSection === sectionName;
    };

    const handlePostalCodeChange = (e) => {
        setPostalCode(e.target.value);
        setError('');
    }

    const renderSection = (step) => {
        switch (step) {
            case 0:
                return (
                    <CSSTransition key={0} classNames="fade" timeout={500}>
                        <div className="section1">
                            <section className="section1">
                                <div className="City">
                                    <div className="section1-1">
                                        <h6>Where are you located?</h6>
                                        <Form>
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '25rem' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >
                                                <div>
                                                    <FloatingLabel controlId="outlined-select-city" label="Select your City" className="mb-3" style={{ width: '25rem' }}>
                                                        <Form.Select
                                                            defaultValue="Khi"
                                                            onChange={handleCitySelect}
                                                        >
                                                            {CityName.map((option) => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    </FloatingLabel>
                                                </div>
                                            </Box>
                                            <FloatingLabel className="mb-3" label="Postal Code" style={{ width: '25rem' }}>
                                                <Form.Control
                                                    autoComplete="off"
                                                    placeholder="Postal Code"
                                                    type="number"
                                                    required
                                                    onChange={handlePostalCodeChange}
                                                />
                                            </FloatingLabel>
                                        </Form>
                                    </div>
                                </div>
                                <div className="section1-2">
                                    <h6>What best describes why you're fundraising?</h6>
                                    <div className="Opt">
                                        {options.map((option) => (
                                            <p
                                                key={option}
                                                className={isOptionSelected(option) ? "activeOption" : ""}
                                                onClick={() => handleOptionSelect(option)}
                                            >
                                                {option}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 1:
                return (
                    <CSSTransition key={1} classNames="fade" timeout={500}>
                        <div className="section2">
                            <section className="section2">
                                <h6>Who are you fundraising for?</h6>
                                <div className={`section2-1 ${isSectionActive("Yourself") ? "activeOption" : ""}`}
                                    onClick={() => handleSectionActivation("Yourself")} >
                                    <p>Yourself</p> <br />
                                    <p>Funds are delivered to your bank account for your own use</p>
                                </div>
                                <div className={`section2-1 ${isSectionActive("Someone else") ? "activeOption" : ""}`}
                                    onClick={() => handleSectionActivation("Someone else")} >
                                    <p>Someone else</p> <br />
                                    <p>You’ll invite a beneficiary to receive funds or distribute them yourself</p>
                                </div>
                                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 2:
                return (
                    <CSSTransition key={2} classNames="fade" timeout={500}>
                        <div className="section3">
                            <section className="section3">
                                <p>Amount to be Raised</p>
                                <FloatingLabel className="mb-3" label="Amount" style={{ width: '25rem' }}>
                                    <Form.Control
                                        id="outlined-basic"
                                        placeholder="Amount"
                                        label="Amount"
                                        onChange={handleAmountChange}
                                        variant="outlined"
                                        type="number"
                                        inputProps={{
                                            inputMode: 'numeric',
                                            pattern: "[0-9]*",
                                            onInput: (event) => {
                                                const value = event.target.value;
                                                event.target.setCustomValidity(
                                                    /^\d+$/.test(value) ? '' : 'Please enter a valid integer.'
                                                );
                                            },
                                        }}
                                    />
                                </FloatingLabel>
                                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 3:
                return (
                    <CSSTransition key={3} classNames="fade" timeout={500}>
                        <div className="section4">
                            <section className="section4">
                                <h6>Enter Details about Campaign</h6>
                                <FloatingLabel label="Campaign Name" style={{ width: '25rem' }}>
                                    <Form.Control
                                        id="outlined-basic"
                                        placeholder="Canmpaign Name"
                                        onChange={handleFormInputChange("campaignName")}
                                        variant="outlined"
                                        style={{ marginBottom: "1rem" }}
                                    />
                                </FloatingLabel>
                                <FloatingLabel className="mb-3" label="Campaign Description" style={{ width: '25rem' }}>
                                    <Form.Control
                                        id="outlined-basic text"
                                        placeholder="Campaign Description"
                                        onChange={handleFormInputChange("campaignDescription")}
                                        variant="outlined"
                                        style={{ marginBottom: "1rem" }}
                                    />
                                    <p>Max 50 words</p>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Select Image for your Campaign</Form.Label>
                                        <Form.Control type="file" accept=".jpg, .jpeg, .png" ref={fileInputRef} onChange={handleFileChange} />
                                    </Form.Group>
                                </FloatingLabel>
                                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                            </section>
                        </div>
                    </CSSTransition >
                );
            case 4:
                return (
                    <CSSTransition key={4} classNames="fade" timeout={500}>
                        <div className="section5">
                            <section className="section5">
                                <h6>Please enter your Account Details</h6>
                                <FloatingLabel label="Account Title" style={{ width: '25rem' }}>
                                    <Form.Control
                                        id="outlined-basic"
                                        placeholder="Account Title"
                                        variant="outlined"
                                        onChange={handleFormInputChange("accountTitle")}
                                        style={{ marginBottom: '1rem' }}
                                    />
                                </FloatingLabel>
                                <FloatingLabel className="mb-3" label="Account Number" style={{ width: '25rem' }}>
                                    <Form.Control
                                        id="outlined-basic"
                                        placeholder="Account Number"
                                        onChange={handleFormInputChange("accountNumber")}
                                        variant="outlined"
                                        type="text"
                                    />
                                </FloatingLabel>
                                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                            </section>
                        </div>
                    </CSSTransition>
                );
            default:
                return null;
        }
    };


    return (
        <>
            <div className="web-body">
                <section className="form left">
                    <section className="stepper">
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                        </Box>
                    </section>
                    <TransitionGroup>
                        {renderSection(activeStep)}
                    </TransitionGroup>
                    <section className="actions">
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    After clicking the finish button, will proceed to the campaign page.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </section>
                </section>
                <section className="right">
                    <div className="right-text">
                        Embark on your fundraising journey now!
                    </div>
                </section>
            </div>
            <ToastContainer />
        </>
    );
}