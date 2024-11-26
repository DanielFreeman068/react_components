import React from 'react';
import './ResponsiveGallery.css';

const ResponsiveGallery = ({ imageInfo }) => {
// gets images from the imageInfo object
const images = Object.keys(imageInfo)
    .filter(key => key.startsWith('image'))
    .map(key => imageInfo[key]);

return (
    <div className="gallery-container">
        {/* Gallery Header */}
        {imageInfo.webName? (<h1 className='gallery-header'>{`${imageInfo.webName} Gallery`}</h1>) : <h1 className='gallery-header'>Image Gallery</h1>}
        
        {/* Image Grid */}
        <div className="gallery-grid">
            {images.map((image, index) => (
            <div key={index} className="gallery-card">
                <div className="gallery-image-wrapper">
                    {image.pictureURL? (<img src={image.pictureURL} alt={image.altText || `Gallery image ${index + 1}`} className="gallery-picture"/>) : (<img src='https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg' alt={image.altText || `Gallery image ${index + 1}`} className="gallery-picture"/>)}
                </div>
                <div className="gallery-image-caption">
                    <h3 className="gallery-image-name">
                        {image.pictureName || `Image ${index + 1}`}
                    </h3>
                </div>
            </div>
            ))}
        </div>
    </div>
);
};

export default ResponsiveGallery;