// function that creates item
function galleryItem ({galleryItem}) {

    let counter = 0;

    function plusOne () {
        console.log('working!')
    }

    // let addCounter = galleryItem.likes += counter;

    return(
        <div>
        <p>{galleryItem.description}</p>
        <img src="images/{galleryItem.pic}.png"></img>
        <p>Likes: {counter}</p>
        {/* <img src="images/goat_small.jpg"/>  */}
        <button onClick={(plusOne)}>Love it</button>
        </div>
    // What is the issue? 
    )
}

export default galleryItem;