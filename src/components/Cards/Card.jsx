import "./card.css"
import React from 'react'

import Card from '@mui/material/Card';
import starIcon from "../../Assets/card_image/star.png"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DonateBtn from "../DonateBtn/DonateBtn";
import { useNavigate ,Link } from 'react-router-dom';

const Cards = ({ data }) => {
  const navigate = useNavigate();
      if (!data) {
        return <div>Loading...</div>; // You can show a loading state while waiting for data.
      }
    
    return (
        <div className="cards">
            {data.map((item) => (
                // <a href="campaign">
                <Link key={item._id} to={`/campaign-details/${item._id}`}
                style={{ textDecoration: "none", color: "inherit" }}>
               <Card className="card" sx={{ maxWidth: 345 }}>
                    
                    <img className="card-img" src={item.ImageURL} alt="card image" loading="lazy" />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            {item.campaign}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {/* {item.description} */}
                            {`${item.description.split(" ").slice(0, 10).join(" ")} ...`}
                        </Typography>
                        <div className="card-btn">
                            <DonateBtn />
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className="card-rating-request">
                            <div className="card-rating">
                                <img className="star-icon" src={starIcon} alt="icon" />
                                <h6 className="card-font">{item.endosment ? item.endosment: 0}</h6>
                            </div>
                            <h6 className="card-font">{item.amountNeeded}</h6>
                        </div>
                    </CardActions>
                </Card> </Link>
            ))

            }
        </div>
    )
}

export default Cards


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import Card from "@mui/material/Card";
// import starIcon from "../../Assets/card_image/star.png";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import DonateBtn from "../DonateBtn/DonateBtn";

// const Cards = ({ data }) => {
//   const location = useLocation();
//   console.log("Current Location State:", location.state);

//   if (!data) {
//     return <div>Loading...</div>; // You can show a loading state while waiting for data.
//   }

//   return (
//     <div className="cards">
//       {data.map((item) => (
//         <Card key={item.id} className="card" sx={{ maxWidth: 345 }}>
//         <Link key={item._id} to={`/details/${item._id}`}
//                     style={{ textDecoration: "none", color: "inherit" }}
//         >

//             {/* Use the Link component from React Router to handle redirection */}
//             <img className="card-img" src={item.images} alt="card image" />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {item.campaign}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {`${item.description.split(" ").slice(0, 10).join(" ")} ...`}
//               </Typography>
//               <div className="card-btn">
//                 <DonateBtn />
//               </div>
//             </CardContent>
//           </Link>
//           <CardActions>
//             <div className="card-rating-request">
//               <div className="card-rating">
//                 <img className="star-icon" src={starIcon} alt="icon" />
//                 <h6 className="card-font">{item.endorsement ? item.endorsement : 0}</h6>
//               </div>
//               <h6 className="card-font">{item.amountNeeded}</h6>
//             </div>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Cards;
