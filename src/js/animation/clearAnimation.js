// clearAnimation.js

function clearAnimation(whichInterval, whichName)
{
    playSound("sfx_blip_001", 1.0);

    ge(whichName).style.color = "rgb(255, 255, 255)";

    clearInterval(whichInterval);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

