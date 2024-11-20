import ProfileCard from './components/profile-card/profile-card-component'
function Profile(){
    // define variables
    let info = {
        profileImage: "https://res.cloudinary.com/dehoobuso/image/upload/v1731377347/full-cloud-tasks/dog10.jpg.jpg",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            linkedIn: "https://linkedIn.com/johndoe"
        }
    }
    return(
        <>
    <a href="/" style={{
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        backgroundColor: '#007BFF', 
        color: '#fff', 
        padding: '10px 15px', 
        borderRadius: '5px', 
        textDecoration: 'none', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>Return to Library</a>
        
        <ProfileCard firstName = {info.firstName} lastName = {info.lastName} email = {info.email} profileImage = {info.profileImage} socialLinks = {info.socialLinks}/>
        </>
    )
}

export default Profile;