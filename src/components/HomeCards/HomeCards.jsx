import "./homecard.css"
import React from 'react'
import starIcon from "../../Assets/card_image/star.png"
import DonateBtn from "../DonateBtn/DonateBtn"

const HomeCards = ({ data }) => {

    return (
        <>
            <div className="HCards">
                {data.map((item) => (
                    <div className="card" style={{ display: 'flex', marginRight: '2rem' }} sx={{ maxWidth: 345 }}>
                        <div className="img" style={{
                            backgroundImage: `url(${item.images})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}></div>
                        <div className="text">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <p className="h3"> {item.title} </p>
                                <DonateBtn />
                            </div>
                            <p className="p"> {item.description} </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '-1rem'
                            }}>
                                <div style={{ display: 'flex' }}>
                                    <img className="star-icon" src={starIcon} alt="icon" />
                                    <p className="price"> {item.rating} </p>
                                </div>
                                <p className="price"> {item.price} </p>
                            </div>
                        </div>
                    </div >
                ))}
            </div>
        </>
    )
}

export default HomeCards