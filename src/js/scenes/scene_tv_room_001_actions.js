// scene_tv_room_001_actions

function scene_tv_room_001_actions()
{
    ge("bgVideo").play();

    comicBubbleTargetIdArrayOfObjects("ayan1", greetingMessage, 0);
}

// make height of the tv screen 30%
// this makes the gifs fit in the tv screen frame
function tvRoom001()
{
    if (ge("prop_tv_screen_dark"))
    {
        ge("prop_tv_screen_dark").style.height = "30%";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

