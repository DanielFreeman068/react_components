import Footer_Theme from './components/footer/Footer-Theme.jsx'
function Footer(){
    // define variables
    let info = {
        logoImage: "https://res.cloudinary.com/dehoobuso/image/upload/v1731377347/full-cloud-tasks/dog10.jpg.jpg",
        about: "/about",
        faqs: "/faqs",
        home: "/",
        contact: "/contact",
        socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            linkedIn: "https://linkedIn.com/johndoe"
        },
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
        
        <Footer_Theme logoImage = {info.logoImage} about = {info.about} faqs = {info.faqs} home = {info.home} contact = {info.contact} socialLinks = {info.socialLinks}/>
        </>
    )
}

export default Footer;