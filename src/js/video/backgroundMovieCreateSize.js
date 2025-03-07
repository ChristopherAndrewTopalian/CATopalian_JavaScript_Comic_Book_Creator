// backgroundMovieCreateSize.js

function backgroundMovieCreateSize(whichArray, whichItem)
{
    if (document.getElementsByClassName("theBackground2")) // theBackgroundMovieHere
    {
        eraseDivs("backgroundMoviesStyle");
        eraseDivs("theBackgroundMovie");
        eraseDivs("theBackground2");
    }

    let whichFolder = whichArray[whichItem].theUrl;

    let theImage = ce("div");
    theImage.id = "theBackgroundMovie";
    theImage.title = 'theBackgroundMovie';

    theImage.className = "backgroundMoviesStyle";
    theImage.style.position = "absolute";

    theImage.style.left = whichArray[whichItem].theX + "px";

    theImage.style.top = whichArray[whichItem].theY + "px";

    theImage.style.width = whichArray[whichItem].sizeX + "px";

    theImage.style.zIndex = whichArray[whichItem].theLayer;
    ba(theImage);

    //-//

    theImage.innerHTML = '<video loop id =\''+whichArray[whichItem].theId+'\'" autoplay muted height = \''+whichArray[whichItem].sizeX+'\' style = \'position: absolute;\'><source src= \''+whichFolder+'\' type="video\/mp4"><\/video> ';

    theImage.oncontextmenu = function()
    {
        playSound(sfx[3], 0.1);

        menuOptions(whichArray[whichItem].theId);

        idToMove = whichArray[whichItem].theId;
    };

    theImage.onclick = function()
    {
        moveElement(idToMove);
    };

    //-//

    theImage.onmousedown = function()
    {
        idToMove = whichArray[whichItem].theId;
    };

    if (whichArray[whichItem].rotationAmount != null)
    {
        theImage.style.rotate = whichArray[whichItem].rotationAmount;
    }
    ba(theImage);

    makeElementDraggable(theImage);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

