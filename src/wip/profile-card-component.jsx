import '../pages/css/index.css'

export default function profileCard({firstName, lastName, email, profile, socialMediaLinks}) {
    // define variables
    let test = {
        profileImage: "https://cloudinary.com/150",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe"
        }
    };
    return (
        <div className="profile-background">
            <div className="profile-card">
                <img src={test.profileImage} alt="profile picture" className="profile-image" />
                <h1 className="profile-header">Daniel</h1>
            </div>
        </div>
    )
}