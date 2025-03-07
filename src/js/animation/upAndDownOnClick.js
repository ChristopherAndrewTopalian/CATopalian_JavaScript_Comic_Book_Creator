// upAndDownOnClick.js

let upAndDownFlag = false;

function upAndDownOnClick(whichId)
{
    ge(whichId).onclick = function()
    {
        if (upAndDownFlag == false)
        {
            ge(whichId).style.top = ge(whichId).offsetTop + 50 + "px";

            upAndDownFlag = true;
        }

        else if (upAndDownFlag == true)
        {
            ge(whichId).style.top = ge(whichId).offsetTop - 50 + "px";

            upAndDownFlag = false;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

