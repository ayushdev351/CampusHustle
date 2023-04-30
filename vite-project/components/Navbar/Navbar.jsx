import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return() => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const menuToggler = () => {
        open ? setOpen(false) : setOpen(true);
    }
    const currentUser = {
        id : 1,
        username : "Ayush",
        isSeller : true,
    }

    return(
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <span className="text">Buckett</span>
                    <span className="dot"> .</span>
                </div>
                <div className="links">
                    <span>Explore</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become Expert</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={menuToggler}>
                            <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt = "face"/>
                            <span>{currentUser?.username}</span>
                            <div className = {!open ? "close options" : "options"}>
                                {currentUser.isSeller && (
                                    <>
                                        <span>My Buckets</span>
                                        <span>Create Bucket</span>
                                    </>
                                )}
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
            {active &&
                <>
                <hr/>
                <div className="menu">
                    <span>Explore</span>
                    <span>Sign In</span>
                    <span>Become Expert</span>
                    <span>Explore</span>
                    <span>Sign In</span>
                </div>
            </>
            }
        </div>
    )
}

export default Navbar;