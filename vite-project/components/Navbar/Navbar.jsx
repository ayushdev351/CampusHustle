import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="text">Buckett</span>
                    <span className="dot"> .</span>
                </div>
                <div className="links">
                    <span>Explore</span>
                    <span>Sign In</span>
                    <span>Become Expert</span>
                    <button>Join</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;