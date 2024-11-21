import Footer_Theme from './components/footer/Footer-Theme.jsx'

function Footer(){
    // define variables
    let info = {
        webName: "Cloud",
        address: "123 West Cloudington Arizona 85308",
        logoImage: "https://res.cloudinary.com/dehoobuso/image/upload/v1730419145/samples/logo.png",
        routes: {
            about: "/about",
            faqs: "/faqs",
            home: "/",
            testimonials: "/testimonials",
            contact: "/profile-card",
            topPage: "#topPage",
        },
        socialLinks: {
            github: "https://github.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            linkedIn: "https://linkedIn.com/johndoe",
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
        <Footer_Theme logoImage = {info.logoImage} routes = {info.routes} socialLinks = {info.socialLinks} webName = {info.webName} address = {info.address}/>
        </>
    )
}

export default Footer;