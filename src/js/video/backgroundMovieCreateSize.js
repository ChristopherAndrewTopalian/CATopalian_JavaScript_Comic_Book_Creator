// backgroundMovieCreateSize.js

function backgroundMovieCreateSize(whichArray, whichItem)
{
    /*
    if (document.getElementsByClassName("theBackground2")) // theBackgroundMovieHere
    {
        eraseDivs("backgroundMoviesStyle");
        eraseDivs("theBackgroundMovie");
        eraseDivs("theBackground2");
    }
    */

    let whichFolder = whichArray[whichItem].theUrl;

    let theMovie = ce("div");
    theMovie.id = "theBackgroundMovie";
    theMovie.title = 'theBackgroundMovie';
    theMovie.className = "backgroundMoviesStyle";

    theMovie.style.position = "absolute";
    theMovie.style.left = 0 + "px";
    theMovie.style.top = 0 + "px";
    
    //theMovie.style.left = whichArray[whichItem].theX + "px";
    //theMovie.style.top = whichArray[whichItem].theY + "px";

    theMovie.style.width = whichArray[whichItem].sizeX + "px";

    theMovie.style.zIndex = whichArray[whichItem].theLayer;
    ba(theMovie);

    //-//

    theMovie.innerHTML = '<video loop id =\''+whichArray[whichItem].theId+'\'" autoplay muted height = \''+whichArray[whichItem].sizeX+'\' style = \'position: absolute;\'><source src= \''+whichFolder+'\' type="video\/mp4"><\/video> ';

    theMovie.oncontextmenu = function()
    {
        playSound(sfx[3], 0.1);

        menuOptions(whichArray[whichItem].theId);

        idToMove = whichArray[whichItem].theId;
    };

    theMovie.onclick = function()
    {
        moveElement(idToMove);
    };

    //-//

    theMovie.onmousedown = function()
    {
        idToMove = whichArray[whichItem].theId;
    };

    if (whichArray[whichItem].rotationAmount != null)
    {
        theMovie.style.rotate = whichArray[whichItem].rotationAmount;
    }
    ba(theMovie);

    makeElementDraggable(theMovie);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

