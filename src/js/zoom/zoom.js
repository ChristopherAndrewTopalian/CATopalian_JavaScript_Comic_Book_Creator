// zoom.js

function zoom(whichScale)
{
    let theObjects = document.getElementsByTagName("img");

    for (let x = 0; x < theObjects.length; x++)
    {
        // cl(theObjects[x].width);

        // if not theBgId
        if (theObjects[x].id != "theBgId" && theObjects[x].id != "zoomIcon")
        {
            theObjects[x].style.width = (whichScale * 100) + "px";

            //theObjects[x].style.top = theObjects[x].y - 1500;
        }
        else if(theObjects[x].id == "theBgId")
        {
            //if theBgId
            theObjects[x].style.width = theObjects[x].width + (whichScale * 100) + "px";
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

