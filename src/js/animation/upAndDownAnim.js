// upAndDownAnim.js

let upAndDownAnimFlag = false;

function upAndDownAnim(whichId)
{
    if (upAndDownAnimFlag == false)
    {
        ge(whichId).style.top = ge(whichId).offsetTop + 50 + "px";

        upAndDownAnimFlag = true;
    }

    else if (upAndDownAnimFlag == true)
    {
        ge(whichId).style.top = ge(whichId).offsetTop - 50 + "px";

        upAndDownAnimFlag = false;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

