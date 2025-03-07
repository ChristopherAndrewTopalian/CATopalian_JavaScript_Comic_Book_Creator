// eraseAll.js

function eraseAll()
{
    // remove characters, props, backgrounds

    if (ge("theBgId"))
    {
        ge("theBgId").remove();
    }

    eraseDivs("characterStyle");
    eraseDivs("propStyle");
    eraseDivs("menuStyle");
    eraseDivs("theBackground");
    eraseDivs("theBackground2");
    eraseDivs("comicBubble");

    if (ge('prop_tv_screen_dark'))
    {
        ge('prop_tv_screen_dark').remove();
    }

    // eraseDivs("backgroundTiles");
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

