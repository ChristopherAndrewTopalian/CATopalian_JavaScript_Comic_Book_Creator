// anim001.js

let flagAnim001 = false;
let animTimer001;

let whichFlag = false;
let whichTimer;

function anim001(whichId)
{
    playSound("sfx_warp_001", 1.0);

    let startingPosition = ge(whichId).getBoundingClientRect().x;

    // whichTimer = setInterval(function()
    //{
        if (whichFlag == false)
        {
           let x = ge(whichId).offsetLeft;

           x = x + 1;

           ge(whichId).style.left= x + "px";

           // flip horizontal
           ge(whichId).style.transform = "scaleX(1)";

           // if (ge(whichId).getBoundingClientRect().x > startingPosition + 200)

            if (ge(whichId).getBoundingClientRect().x > startingPosition)
            {
                whichFlag = true;
            }
        }
        else if (whichFlag == true)
        {
            let x = ge(whichId).offsetLeft;

            x = x - 1;

            ge(whichId).style.left= x + "px";

            // flip horizontal
            ge(whichId).style.transform = "scaleX(-1)";

            if (ge(whichId).getBoundingClientRect().x < startingPosition - 500)
            {
                whichFlag = false;
            }
        }
    //} , 20);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

