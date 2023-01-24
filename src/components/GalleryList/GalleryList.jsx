// function that iterates Gallery Items into a list.
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {

    let galleryOfItems = props.galleryList.map((galleryItem) => {
        return (
            <div>
                {JSON.stringify(galleryItem)}
                <GalleryItem 
                    galleryItem={galleryItem}
                />
                    {/* galleryItem={props.galleryItem}/> */}
            </div>
        )
    });

    return (
        <div>
            {galleryOfItems}
        </div>
)}

export default GalleryList;

        {/* -Line 11- <img src="images/goat_small.jpg"/> // INSERT INTO OWN COMPONENT?*/}
