// textureTimerRepeat.js

let textureTimerRepeatTimer;

// changes the gif screen texture
function textureTimerRepeat(whichArray, whichId, speed)
{
    clearInterval(textureTimerRepeatTimer);

    // layer adjustment for screen gifs or screen movies
    if (ge("tvMovies") && ge("prop_tv_screen_dark"))
    {
        ge("tvMovies").style.visibility = "hidden";

        ge("prop_tv_screen_dark").style.visibility = "visible";

        // ge("prop_tv_screen_dark").style.zIndex = ge("tvMovies").style.zIndex + 2;

        //alert(ge("tvMovies").style.zIndex);

        //ge("tvMovies").style.zIndex = ge("prop_tv_screen_dark").style.zIndex + 1;
    }

    textureTimerRepeatTimer = setInterval(function()
    {
        if (whichNumber == whichArray.length) // - 1)
        {
            // clearInterval(textureTimerRepeatTimer);

            whichNumber = - 1;
        }
        else
        {
            pageForward(whichArray, whichId);
        }
    }, speed);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

