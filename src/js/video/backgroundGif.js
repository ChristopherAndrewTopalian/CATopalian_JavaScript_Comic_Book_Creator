// backgroundGif.js

function backgroundGif()
{
    let theImage = ce('img');
    theImage.src = bgGifs[1].theUrl;
    theImage.style.position = 'absolute';
    theImage.style.left = 300 + 'px';
    theImage.style.top = 0 + 'px';
    theImage.style.width = 400 + 'px';
    ba(theImage);

    makeElementDraggable(theImage);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

