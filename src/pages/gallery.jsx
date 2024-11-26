import ResponsiveGallery from './components/gallery/ResponsiveGallery.jsx'

// The Gallery component serves as the parent component that defines an array of image data
// and passes that data down to the ResponsiveGallery child component as props.

function Gallery(){
    // Define a variable for the website name that will be passed to the child component
    let websiteName = 'Cloudinary'

    // Define an array of image objects, each containing details like name, URL, and alt text.
    let imageInfo = [
        {
            pictureName: 'Petey', // Name of the image or object (used for caption)
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731704049/full-cloud-tasks/perry.jpg.jpg', // Image URL for displaying the image
            altText: 'Petey', // Alt text for the image (useful for accessibility)
        },
        {
            pictureName: 'Toonces',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731474538/full-cloud-tasks/dog6.jpg.jpg',
            altText: 'Toonces',
        },
        {
            pictureName: 'Tucker',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731392524/full-cloud-tasks/dog5.jpg.jpg',
            altText: 'Tucker',
        },
        {
            pictureName: 'Fat Cat',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731377347/full-cloud-tasks/dog10.jpg.jpg',
            altText: 'Fat Cat',
        },
        {
            pictureName: 'Tonka',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731377129/full-cloud-tasks/dog2.jpg.jpg',
            altText: 'Tonka',
        },
        {
            pictureName: 'Santa',
            pictureURL: 'https://res.cloudinary.com/dehoobuso/image/upload/v1731279313/full-cloud-tasks/santaballs.png.jpg',
            altText: 'Santa',
        }
    ];

    return(
        <>
            {/* Link that returns to the library. Inline styles for visual appearance. */}
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
            
            {/* Pass the website name and image information as props to the ResponsiveGallery component */}
            <ResponsiveGallery websiteName={websiteName} imageInfo={imageInfo}/>
        </>
    );
}

export default Gallery;
