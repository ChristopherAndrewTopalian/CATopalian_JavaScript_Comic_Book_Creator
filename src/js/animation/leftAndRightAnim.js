// leftAndRightAnim.js

let leftAndRightFlag = false;

function leftAndRightAnim(whichId)
{
    if (leftAndRightFlag == false)
    {
        ge(whichId).style.left = ge(whichId).offsetLeft + 50 + "px";

        leftAndRightFlag = true;
    }

    else if (leftAndRightFlag == true)
    {
        ge(whichId).style.left = ge(whichId).offsetLeft - 50 + "px";

        leftAndRightFlag = false;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

