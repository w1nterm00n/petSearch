import React from "react";
import logo from '../logo.png'

const Footer = () => {
    return (
        <div>
           <footer
            style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                backgroundColor: "#f8f9fa",
                width: "100%"
            }}
            >
            <p className="footerText" style={{ marginTop: 20 }}>GET PET BACK © Copyright, 2022</p>
            <p className="footerText">Все права защищены</p>
            </footer>
        </div>
    );
};

export default Footer;