import './ResponsiveGallery.css'

function Responsive_Gallery({imageInfo}) {
    return (
        <div>
            <h1>{imageInfo.webName}</h1>
            <h1>{imageInfo.imageOne.pictureURL}</h1>
        </div>
    )
}

export default Responsive_Gallery