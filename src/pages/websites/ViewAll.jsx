import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
import cardImg from "../../Assets/card_image/card-img.jpg"
import eduImg from "../../Assets/card_image/education.jpg"
import bookImg from "../../Assets/card_image/book.jpg"
import Navbar from '../../components/Navbar/Navbar'
import searchIcon from "../../Assets/logos/search.png"
import notiIcon from "../../Assets/logos/notification.png"
import profileIcon from "../../Assets/logos/user.png"
import { NavLink } from 'react-router-dom';

const ViewAll = () => {
    const data = [
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Aslam",
            description: "Request for Education",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: bookImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Aslam",
            description: "Request for Education",
            rating: "4.8",
            price: "4000 PKR"
        },
        {
            images: bookImg,
            title: "Shaheen",
            description: "Request for book",
            rating: "4.9",
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.5",
            price: "10000 PKR"
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar search={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />} />
            <h4 style={{ marginLeft: "30px", marginTop: '2rem' }}>Choose Campaigns</h4>
            <div style={{ margin: "30px" }}>
                <Cards data={data} />
            </div>
            <Footer />
        </div>
    );
};

export default ViewAll
