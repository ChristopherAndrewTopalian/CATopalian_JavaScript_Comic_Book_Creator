// videoCreateWebm.js

function videoCreateWebm(whichVideo, whichNumber, whichId, theX, theY, sizeX, theZindex, whichClass)
{
    whichVideo = "src/media/video/" + whichVideo;

    let mainDiv = ce("div");
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let theVideo = ce("video");
    theVideo.setAttribute("loop", true);
    theVideo.id = whichId;
    mainDiv.append(theVideo);

    //-//

    let theSource = ce("source");
    theSource.src = whichVideo;
    theSource.setAttribute("type", "video/mp4");

    theVideo.style.position = "absolute";
    theVideo.style.left = theX + "px";
    theVideo.style.top = theY + "px";
    theVideo.style.width = sizeX + "px";
    theVideo.style.zIndex = 200000;
    theVideo.append(theSource);

    //-//

    ge(whichId).oncontextmenu = function()
    {
        menuOptions(whichId);
    };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

