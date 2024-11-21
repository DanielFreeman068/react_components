import style from './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer_Theme({logoImage, routes, socialLinks, webName, address}) {
    const iconStyle = {
        width: "25px",
        height: "25px",
        margin: "0 10px",
        cursor: 'pointer',
    };
    return (
        <div className="footer-background" style={style}>
            <footer>
        <div className="fcont">
            <div className="fhead">
            {!logoImage ? (<img src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" alt="logo"/>) : (<img src={logoImage} alt="logo"/>)}
            {address ? (<div className='ftxt'>{address}</div>) : null}
            </div>
            <div className="links">
                <h1>Website Links</h1>
                {routes.home? (<h3><a href={routes.home}>Home page</a></h3>) : null}
                {routes.about? (<h3><a href={routes.about}>About Us</a></h3>) : null}
                {routes.testimonials? (<h3><a href={routes.testimonials}>Testimonials</a></h3>) : null}
                {routes.contact? (<h3><a href={routes.contact}>Contact Us</a></h3>) : null}
                {routes.faqs? (<h3><a href={routes.faqs}>FAQS</a></h3>) : null}
            </div>
            <div className="socials">
                <h1 className="socialtxt">
                    Social Media
                </h1>
                <div className="social-imgs">
                    {socialLinks?.github && (<a href={socialLinks.github} target="_blank" rel="noopener noreferrer"className="social-link">
                        <FaGithub style={{ ...iconStyle, color: "#181717" }} />
                    </a>
                    )}
                    {socialLinks?.twitter && (<a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaXTwitter style={{ ...iconStyle, color: "#1DA1F2" }} />
                    </a>
                    )}
                    {socialLinks?.linkedIn && (<a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin style={{ ...iconStyle, color: "#0077B5" }} />
                    </a>
                    )}
                    {socialLinks?.instagram && (<a href={socialLinks.instagram} target="_blank"  rel="noopener noreferrer"className="social-link">
                        <FaInstagram style={{...iconStyle,color: "#E4405F" }} />
                    </a>
                    )}
                    {socialLinks?.facebook && (<a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"className="social-link">
                        <FaFacebook style={{ ...iconStyle, color: "#1877F2" }} />
                    </a>
                    )}
                </div>
            </div>
        </div>
        <div className="foot">
            All Rights Reserved | ©2024 {webName}
        </div>
    </footer>
        </div>
    )
}

export default Footer_Theme