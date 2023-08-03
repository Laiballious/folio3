import React from 'react'
import logo from "../../Assets/logos/sad.png"
const Page404 = () => {
    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <img style={{ width: "70px", height: "70px" }} src={logo} alt="" />
                <h1>404</h1>
                <p>Page not found</p>
                <h6>We're sorry, but the page you are looking for cannot be found. It seems that the content you are trying to access has either been moved, deleted, or never existed in the first place. Don't worry; let's get you back on track.</h6>
            </div>
        </div>
    )
}

export default Page404
