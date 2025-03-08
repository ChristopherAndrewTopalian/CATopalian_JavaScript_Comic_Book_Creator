// backgroundMovieCreateSize.js

function backgroundMovieCreateSize(whichArray, whichItem)
{
    if (ge('videoMainDiv'))
    {
        ge('videoMainDiv').remove();
    }

    let mainDiv = ce('div');
    mainDiv.id = 'videoMainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = whichArray[whichItem].theX + "px";
    mainDiv.style.top = whichArray[whichItem].theY + "px";
    mainDiv.style.width = whichArray[whichItem].sizeX + 'px';
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let videoElement = ce('video');
    videoElement.id = 'theVideo';
    videoElement.setAttribute('height', whichArray[whichItem].sizeX + 'px');
    videoElement.setAttribute('loop', true);
    videoElement.setAttribute('autoplay', true);
    //videoElement.setAttribute('muted', true);
    videoElement.muted = true;
    mainDiv.append(videoElement);

    //-//

    let sourceElement = ce('source');
    sourceElement.setAttribute('src', whichArray[whichItem].theUrl);
    sourceElement.setAttribute('type', 'video/mp4');
    videoElement.append(sourceElement);

    // load video 
    // videoElement.load();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

