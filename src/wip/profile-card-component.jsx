import '../pages/css/profile.css'

export default function ProfileCard({firstName, lastName, email, profileImage, socials}) {
    return (
        <div className="profile-background">
            <div className="profile-card">
                <img src={profileImage} alt="profile picture" className="profile-image" />
                <h1 className="profile-header">{firstName}</h1>
                <h1>{socials.github}</h1>
            </div>
        </div>
    )
}