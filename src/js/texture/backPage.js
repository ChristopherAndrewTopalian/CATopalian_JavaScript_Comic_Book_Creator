// backPage.js

function backPage(whichId, whichArray)
{
    if (thePage > 0)
    {
        thePage -= 1;

        ge(whichId).src = whichArray[thePage].name;

        ge(whichId).style.width = whichArray[thePage].sizeX;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

