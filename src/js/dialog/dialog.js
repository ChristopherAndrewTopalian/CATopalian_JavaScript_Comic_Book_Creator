// dialog.js

// play dialog over characters head at a certain rate
function dialog(whichId, whichArray, whichIndex, whichTime)
{
    setInterval(function()
    {
        comicBubbleTargetIdArrayOfObjects(whichId, whichArray, whichIndex);

        if (whichIndex < whichArray.length)
        {
            whichIndex += 1;
        }
        // repeat with else
        if (whichIndex == whichArray.length)
        {
            whichIndex = 0;
        }
    }, whichTime * 1000);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

