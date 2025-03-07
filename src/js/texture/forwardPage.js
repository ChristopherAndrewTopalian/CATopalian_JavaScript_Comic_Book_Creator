// forwardPage.js

let thePage = 0;

function forwardPage(whichId, whichArray)
{
    // if (thePage < whichArray.length - 1) //-1
    if (thePage <= whichArray.length) //-1
    {
        // src
        ge(whichId).src = whichArray[thePage].name;

        // size
        ge(whichId).style.width = whichArray[thePage].sizeX;

        ge(whichId).style.top = whichArray[thePage].theY;

        ge(whichId).style.left = whichArray[thePage].theX;

        //++thePage;
        //thePage += 1;
        thePage++;
    }
    //if (thePage == whichArray.length - 1)
    if (thePage == whichArray.length)
    {
        thePage = 0;

        //cl("length reached");
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

