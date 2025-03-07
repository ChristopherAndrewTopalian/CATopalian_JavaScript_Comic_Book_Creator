// eraseDivs.js

function eraseDivs(whichClass)
{
    let theFound = document.querySelectorAll("." + whichClass);

    for (let x = 0; x < theFound.length; x++)
    {
        theFound[x].remove();
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

