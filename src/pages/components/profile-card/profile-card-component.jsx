import { useState } from 'react';
import style from './ProfileCard.css'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ProfileCard({firstName, lastName, email, profileImage, socialLinks, profileBio}) {
    const [isOpen, setIsOpen] = useState(false);
    const iconStyle = {
        width: "25px",
        height: "25px",
        margin: "0 10px",
        cursor: 'pointer',
    };
    return (
        <div className="profile-background" style={style}>
            <div className="profile-card">
                {!profileImage ? (<img src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" alt="profile" className="profile-image" />) : (<img src={profileImage} alt="profile picture" className="profile-image" />)}
                <h1 className="profile-header">{firstName} {lastName}</h1>
                <a href={`mailto:${email}`} className="profile-email">{email}</a>
                {profileBio ? (<h1>Bio</h1>) : null}
                <hr/>
                {profileBio ? (<p className='profileBio'>{profileBio}</p>) : null}
                <h3 className="profile-contact" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>Get into Contact</h3>

                <div className={`social-icons ${isOpen ? 'active' : ''}`} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "1rem"
                    }}>
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
        
    )
}

export default ProfileCard