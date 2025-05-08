// i need  homepage that take one hedaing tag at the top center and at the left side sample text and right side login button

import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/HomePage.css";

export default function HomePage() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <div className="home-page">
            <h1>SHOPPING WEBSITE</h1>
            <div className="content">
                <div className="left-side">
                 <p> This is a sample text about the webiste that describes the purpose of the website.  </p>
                </div>
                <div className="right-side">
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
}