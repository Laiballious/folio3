import "./card.css";
import React from 'react';
import Card from '@mui/material/Card';
import starIcon from "../../Assets/card_image/star.png";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from "../button/button";

const Cards = ({ data }) => {
    const navigate = useNavigate();
    
    if (!data) {
        return <div>Loading...</div>;
    }

    const handleCardClick = (campaignId) => {
        navigate(`/campaign-details/${campaignId}`);
    };

    const handleDonateBtnClick = (campaignId, e) => {
        e.stopPropagation(); // Stop the click event from propagating to the card
        navigate(`/donation/${campaignId}`);
    };

    const handleViewDetailsBtnClick = (campaignId, e) => {
        e.stopPropagation(); // Stop the click event from propagating to the card
        navigate(`/campaign-details/${campaignId}`);    };

    return (
        <div className="cards">
            {data.map((item) => (
                <Card className="card" key={item._id} sx={{ maxWidth: 345 }} onClick={() => handleCardClick(item._id)}>
                    <img className="card-img" src={item.ImageURL} alt="card image" loading="lazy" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.campaign}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {`${item.description.split(" ").slice(0, 10).join(" ")} ...`}
                        </Typography>
                        <div className="card-btn">
                            <Button onClick={(e) => handleDonateBtnClick(item._id, e)} BGcolor="#117b34" color="#ffffff" children="Donate Now" fontSize="10px" width="100px" height="30px" />
                            <Button onClick={(e) => handleViewDetailsBtnClick(item._id, e)} children="View Details" fontSize="10px" width="100px" height="30px" />
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className="card-rating-request">
                            <div className="card-rating">
                                <img className="star-icon" src={starIcon} alt="icon" />
                                <h6 className="card-font">{item.endorsement ? item.endorsement : 0}</h6>
                            </div>
                            <h6 className="card-font">{item.amountNeeded}</h6>
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default Cards;

// import "./card.css";
// import React from 'react';
// import Card from '@mui/material/Card';
// import starIcon from "../../Assets/card_image/star.png";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import DonateBtn from "../DonateBtn/DonateBtn";
// import { useNavigate } from 'react-router-dom';
// import Button from "../button/button";
// const Cards = ({ data }) => {
//     const navigate = useNavigate();
    
//     if (!data) {
//         return <div>Loading...</div>;
//     }

//     const handleCardClick = (itemId) => {
//         navigate(`/campaign-details/${itemId}`);
//     };

//     const handleBtnClick = (itemId, e) => {
//         e.stopPropagation(); // Stop the click event from propagating to the card
//         navigate(`/donation/${itemId}`);
//     };

//     return (
//         <div className="cards">
//             {data.map((item) => (
//                 <Card className="card" key={item._id} sx={{ maxWidth: 345 }} onClick={() => handleCardClick(item._id)}>
//                     <img className="card-img" src={item.ImageURL} alt="card image" loading="lazy" />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {item.campaign}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             {`${item.description.split(" ").slice(0, 10).join(" ")} ...`}
//                         </Typography>
//                         <div className="card-btn" >
//                             <Button BGcolor="#117b34" color="#ffffff" children="Donate Now" width ="150px" height = "30px"/>
//                             <Button  children="View Details" width ="150px" height = "30px"/>
//                             {/* <Button onClick, children ,width,height /> */}
//                         </div>
//                     </CardContent>
//                     <CardActions>
//                         <div className="card-rating-request">
//                             <div className="card-rating">
//                                 <img className="star-icon" src={starIcon} alt="icon" />
//                                 <h6 className="card-font">{item.endorsement ? item.endorsement : 0}</h6>
//                             </div>
//                             <h6 className="card-font">{item.amountNeeded}</h6>
//                         </div>
//                     </CardActions>
//                 </Card>
//             ))}
//         </div>
//     );
// }

// export default Cards;


// // import "./card.css"
// // import React from 'react'

// // import Card from '@mui/material/Card';
// // import starIcon from "../../Assets/card_image/star.png"
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Typography from '@mui/material/Typography';
// // import DonateBtn from "../DonateBtn/DonateBtn";
// // import { useNavigate ,Link } from 'react-router-dom';

// // const Cards = ({ data }) => {
// //   const navigate = useNavigate();
// //       if (!data) {
// //         return <div>Loading...</div>; // You can show a loading state while waiting for data.
// //       }
    
// //     return (
// //         <div className="cards">
// //             {data.map((item) => (
// //                 // <a href="campaign">
// //                 <Link key={item._id} to={`/campaign-details/${item._id}`}
// //                 style={{ textDecoration: "none", color: "inherit" }}>
// //                <Card className="card" sx={{ maxWidth: 345 }}>
                    
// //                     <img className="card-img" src={item.ImageURL} alt="card image" loading="lazy" />
// //                     <CardContent>

// //                         <Typography gutterBottom variant="h5" component="div">
// //                             {item.campaign}
// //                         </Typography>

// //                         <Typography variant="body2" color="text.secondary">
// //                             {/* {item.description} */}
// //                             {`${item.description.split(" ").slice(0, 10).join(" ")} ...`}
// //                         </Typography>
// //                         <div className="card-btn">
// //                             <DonateBtn />
// //                         </div>
// //                     </CardContent>
// //                     <CardActions>
// //                         <div className="card-rating-request">
// //                             <div className="card-rating">
// //                                 <img className="star-icon" src={starIcon} alt="icon" />
// //                                 <h6 className="card-font">{item.endosment ? item.endosment: 0}</h6>
// //                             </div>
// //                             <h6 className="card-font">{item.amountNeeded}</h6>
// //                         </div>
// //                     </CardActions>
// //                 </Card> </Link>
// //             ))

// //             }
// //         </div>
// //     )
// // }

// // export default Cards

