import ResponsiveGallery from './components/gallery/ResponsiveGallery.jsx'

function Gallery(){
    // define variables
    let imageInfo = {
        webName: 'Cloudinary',
        imageOne: {
            pictureName: 'Petey',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731704049/full-cloud-tasks/perry.jpg.jpg',
            altText: 'Petey',
        },
        imageTwo: {
            pictureName: 'Toonces',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731474538/full-cloud-tasks/dog6.jpg.jpg',
            altText: 'Toonces',
        },
        imageThree: {
            pictureName: 'Tucker',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731392524/full-cloud-tasks/dog5.jpg.jpg',
            altText: 'Tucker',
        },
        imageFour: {
            pictureName: 'Fat Cat',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731377347/full-cloud-tasks/dog10.jpg.jpg',
            altText: 'Fat Cat',
        },
        imageFive: {
            pictureName: 'Tonka',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731377129/full-cloud-tasks/dog2.jpg.jpg',
            altText: 'Tonka',
        },
        imageSix: {
            pictureName: 'Santa',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731279313/full-cloud-tasks/santaballs.png.jpg',
            altText: 'Santa',
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
        <ResponsiveGallery imageInfo = {imageInfo}/>
        </>
    )
}

export default Gallery;