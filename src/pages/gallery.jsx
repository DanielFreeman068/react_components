import Responsive_Gallery from './components/gallery/Responsive-Gallery.jsx'

function Gallery(){
    // define variables
    let imageInfo = {
        imageOne: {
            pictureName: 'Cloud',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1730419145/samples/cloud1.jpg',
            altText: 'Cloud',
        },
        imageTwo: {
            pictureName: 'Cloud',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1730419145/samples/cloud1.jpg',
            altText: 'Cloud',
        },
        imageThree: {
            pictureName: 'Cloud',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1730419145/samples/cloud1.jpg',
            altText: 'Cloud',
        },
        imageFour: {
            pictureName: 'Cloud',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1730419145/samples/cloud1.jpg',
            altText: 'Cloud',
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
        <Responsive_Gallery imageInfo = {imageInfo}/>
        </>
    )
}

export default Gallery;