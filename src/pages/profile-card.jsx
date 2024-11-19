import ProfileCard from '../wip/profile-card-component'

function Profile(){
    // define variables
    let info = {
        profileImage: "https://cloudinary.com/150",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe"
        }
    }
    return(
        <>
        <ProfileCard firstName = {info.firstName} lastName = {info.lastName} email = {info.email} profileImage = {info.profileImage} socials = {info.socialLinks}/>
        </>
    )
}

export default Profile;