// leftOrRightOnClick.js

let leftOrRightOnClickFlag = false;

function leftOrRightOnClick(whichId)
{
    ge(whichId).onclick = function()
    {
        if (leftOrRightOnClickFlag == false)
        {
            ge(whichId).style.left = ge(whichId).offsetLeft + 50 + "px";

            leftOrRightOnClickFlag = true;
        }

        else if (leftOrRightOnClickFlag == true)
        {
            ge(whichId).style.left = ge(whichId).offsetLeft - 50 + "px";

            leftOrRightOnClickFlag = false;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

