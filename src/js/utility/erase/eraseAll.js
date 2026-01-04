// eraseAll.js

function eraseAll()
{
    // images

    // get the list of images
    let images = document.querySelectorAll('img');

    // loop through them by index
    for (let i = 0; i < images.length; i++)
    {
        let img = images[i];

        // if the id is NOT 'zoomIcon', remove it
        if (img.id !== 'zoomIcon')
        {
            img.remove(img);
        }

        if (ge("theBgId"))
        {
            ge("theBgId").remove();
        }

        if (ge("tvMovies"))
        {
            ge("tvMovies").remove();
        }
    }

    //-//

    // videos

    // get the list of videos
    let videos = document.querySelectorAll('video');

    // loop through them by index
    for (let i = 0; i < videos.length; i++)
    {
        let vid = videos[i];

        // if the id is NOT 'zoomIcon', remove it
        if (vid.id !== 'vidIcon')
        {
            vid.remove(vid);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

