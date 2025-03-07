// timerTextureForward.js

let timerForwardVariable;

function timerTextureForward(whichId, whichArray)
{
    clearInterval(timerForwardVariable);

    let speed = 5 * 1000;

    timerForwardVariable = setInterval(function()
    {
        //if (thePage == whichArray.length)
        //{
            // whichNumber2 = -1;
            // whichNumber2 = 0;
         //   thePage = 0;
        //}
        
        forwardPage(whichId, whichArray); 
        
    }, speed);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

