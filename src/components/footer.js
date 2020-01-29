import React from "react";
import "./footer.css";
import ReactLogo from "../assets/images/logo192.png";

function Footer(props) {
    return (
        <footer className="fixed-bottom">
            Clicky Game!&nbsp;
            <img src={ReactLogo} style={{ height: 20 }} alt={{}} />
        </footer>
    );
}

export default Footer;