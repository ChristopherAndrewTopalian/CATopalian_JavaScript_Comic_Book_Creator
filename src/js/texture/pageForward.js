// pageForward.js

let whichNumber = 0;

function pageForward(whichArray, whichId)
{
    if (whichNumber < whichArray.length)
    {
        let theImage = ge(whichId);

        theImage.src = whichArray[whichNumber].textureOffline;

        whichNumber += 1;
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

