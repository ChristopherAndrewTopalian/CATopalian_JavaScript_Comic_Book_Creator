// forwardPageAny.js

let thePage2 = 0;

function forwardPageAny(whichId)
{
    let whichArray = eval(whichId);

    if (thePage2 < whichArray.length-1)
    {
        // cl(whichArray[thePage2]);

        thePage2 += 1;

        ge(whichId).src = whichArray[thePage2].name;

        // size
        ge(whichId).style.width = whichArray[thePage2].sizeX;

        ge(whichId).style.top = whichArray[thePage2].theY;

        ge(whichId).style.left = whichArray[thePage2].theX;

        ge("textBoxTextureChosen").value = ge(idToMove).src;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

