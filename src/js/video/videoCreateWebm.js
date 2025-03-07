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

    //theImage.src = "src/media/texture/prop/" + whichVideo + "\/" + whichVideo + "_" + whichNumber + ".webp";

    //theImage.src = "src/media/texture/prop/" + whichVideo + "_" + whichNumber + ".webp";

    //theImage.src = "video/" + whichVideo;

    //theImage.id = whichId;

    //theVideo.className = whichClass;

    theVideo.style.position = "absolute";
    theVideo.style.left = theX + "px";
    theVideo.style.top = theY + "px";
    theVideo.style.width = sizeX + "px";
    theVideo.style.zIndex = 200000;
    theVideo.append(theSource);
    //theVideoDiv.style.backgroundSize = "cover";
    //theVideoDiv.style.zIndex = theZindex;
    //theVideoDiv.innerHTML = '<video width="800" height = "30%" controls id =\''+whichId+'\' style = "background-size: cover;"><source src= \''+whichVideo+'\' type="video\/mp4"><\/video> ';
    //ba(theVideoDiv);

    ge(whichId).oncontextmenu = function()
    {
        menuOptions(whichId);
    };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

