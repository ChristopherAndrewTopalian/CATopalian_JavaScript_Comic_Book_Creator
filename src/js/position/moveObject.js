// moveObject.js

// move object
function moveObject(whichId)
{
    let theObject = ge(whichId);

    let names = mousePos();

    let x = names[0] - 70;
    let y = names[1] - 200 ;

    theObject.style.left = x;
    theObject.style.top = y;

    ourPlayer.x = x;
    ourPlayer.y = y;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

