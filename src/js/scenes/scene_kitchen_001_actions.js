// scene_kitchen_001_actions.js

function scene_kitchen_001_actions()
{
    ge("bgVideo").play();
}

function turnLightOn(whichId, whichArray)
{
    let lightOn = false;
    ge(whichId).onclick = function()
    {
        //ge(whichId).style.opacity = 0.3;
        if (lightOn == false)
        {
            ge(whichId).style.filter = "brightness("+whichArray[0].nightSetting+")";

            lightOn = true;
        }
        else if (lightOn == true)
        {
            ge(whichId).style.filter = "brightness("+whichArray[0].daySetting+")";

            lightOn = false;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

