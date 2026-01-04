// eraseByClass.js

function eraseByClass(whichClass)
{
    let theFound = document.querySelectorAll("." + whichClass);

    for (let x = 0; x < theFound.length; x++)
    {
        theFound[x].remove();
    }
}

/*
// examples:
eraseByClass("characterStyle");
eraseByClass("propStyle");
eraseByClass("menuStyle");
eraseByClass("theBackground");
eraseByClass("theBackground2");
eraseByClass("comicBubble");
eraseByClass("backgroundTiles");
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

