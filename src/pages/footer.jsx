import Footer_Theme from './components/footer/Footer-Theme.jsx'

function Footer(){
    // define variables
    let info = {
        webName: "Cloud",
        address: "123 West Streetington Arizona 85308",
        logoImage: "https://res.cloudinary.com/dehoobuso/image/upload/v1730419145/samples/logo.png",
        routes: {
            about: "/about",
            faqs: "/faqs",
            home: "/",
            testimonials: "/testimonials",
            contact: "/profile-card",
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
        <p style={{maxWidth:'200px', margin:'0 auto'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, mollitia id dolorum sint atque ipsa doloribus laboriosam, ad quae dignissimos corporis ipsam provident cum libero iste fugiat alias velit tenetur quia? Doloribus necessitatibus aliquam possimus dolor vel! Ullam exercitationem recusandae vitae voluptas animi aut enim voluptatibus debitis quas beatae nihil perspiciatis nemo, laboriosam totam maxime dolor? Quibusdam iusto labore eius quisquam corrupti dolore cupiditate doloribus vitae accusantium, totam quia, suscipit aut quasi eaque voluptatem velit veniam nam fugit facere sed ullam officiis ex ad quis! Animi vero neque fugiat nesciunt quos distinctio quisquam accusantium delectus! Rem recusandae, vel, labore officia itaque laudantium accusantium, asperiores esse saepe magnam error atque. Deserunt debitis consequatur in numquam velit nihil quaerat ut nulla. Maxime iste facere incidunt sint consequuntur, officia exercitationem molestias tempora reiciendis nostrum. Id esse nemo autem vitae. Nesciunt eveniet in illo, beatae,   
        </p>
        <Footer_Theme logoImage = {info.logoImage} routes = {info.routes} socialLinks = {info.socialLinks} webName = {info.webName} address = {info.address}/>
        </>
    )
}

export default Footer;