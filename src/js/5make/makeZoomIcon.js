// makeZoomIcon.js

function makeZoomIcon()
{
    // theZoomIcon
    let theZoomIcon = ce("img");
    theZoomIcon.id = 'zoomIcon';
    theZoomIcon.style.position = "fixed";
    theZoomIcon.style.left = 20 + "px";
    theZoomIcon.style.top = 300 + "px";
    theZoomIcon.style.width = 10 + "px";
    theZoomIcon.src = "src/media/texture/prop/arrow/arrow_four_way.png";
    theZoomIcon.style.zIndex = 4000000000;
    theZoomIcon.style.border = 'solid 1px white';

    //-//

    // left click zoom icon to change icon opacity
    let flagClick = false;

    theZoomIcon.onclick = function()
    {
        if (flagClick == false)
        {
            ge("zoomIcon").style.opacity = 0.2;
            flagClick = true;
        }
        else if (flagClick == true)
        {
            ge("zoomIcon").style.opacity = 1.0;
            flagClick = false;
        }
    };

    //----//

    // right click on zoom icon to start zoom mode
    theZoomIcon.oncontextmenu = function()
    {
        theZoomIcon.style.position = "absolute";
        idToMove = "zoomIcon";
    };

    ba(theZoomIcon);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

