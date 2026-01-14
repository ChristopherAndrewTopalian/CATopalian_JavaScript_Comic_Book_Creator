// soundPlayVoices.js

let whichNumberSound = 0;

let soundPlayVoicesTimer;

function soundPlayVoices(whichArray, speed)
{
    soundPlayVoicesTimer = setInterval(function()
    {
        if (whichNumberSound == whichArray.length)
        {
            clearInterval(soundPlayVoicesTimer);

            //whichNumberSound = -1;

            whichNumberSound = 0;
        }
        else
        {
            playSound(whichArray[whichNumberSound].name, 0.5);

            whichNumberSound += 1;
        }
    }, speed);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

