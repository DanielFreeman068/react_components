import { useState } from 'react';
import style from './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer_Theme({logoImage, about, faqs, home, contact, socialLinks}) {
    const [isOpen, setIsOpen] = useState(false);
    const iconStyle = {
        width: "25px",
        height: "25px",
        margin: "0 10px",
        cursor: 'pointer',
    };
    return (
        <div className="footer-background" style={style}>
            <h1>hi</h1>
        </div>
    )
}

export default Footer_Theme