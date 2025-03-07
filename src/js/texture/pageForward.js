// pageForward.js

let whichNumber = 0;

function pageForward(whichArray, whichId)
{
    whichArray = eval(whichArray);

    if (whichNumber < whichArray.length) // - 1)
    {
        // whichNumber += 1;

        let theImage = ge(whichId);

        // if using the url as the source
        // theImage.src = textureArray[whichNumber].theURL;

        // if using the folder as the source
        // theImage.src = textureArray[whichNumber].theLocation;

        theImage.src = whichArray[whichNumber].textureOffline;

        whichNumber += 1;

        // ge("pageNumber").textContent = whichNumber;

        // ge("imageName").textContent = whichArray[whichNumber].name;
    }
    if (whichNumber == whichArray.length) // - 1)
    {
        whichNumber = 0;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

