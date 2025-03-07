// changeTextureBackAndForth.js

let changeFlag = false;

let defaultTextureSetting = 0;

function changeTextureBackAndForth(whichArray, whichId)
{
    if (changeFlag == false)
    {
        ge(whichId).style.width = whichArray[0].sizeX;

        ge(whichId).style.left = whichArray[0].theX + ge(whichId).getBoundingClientRect().x + "px";

        ge(whichId).src = whichArray[0].url;

        changeFlag = true;
    }
    else
    {
        ge(whichId).style.width = whichArray[1].sizeX;

        ge(whichId).style.left = whichArray[1].theX + ge(whichId).getBoundingClientRect().x + "px";

        ge(whichId).src = whichArray[1].url;

        changeFlag = false;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

