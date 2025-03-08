// backgroundMovieCreate.js

// full screen version
function backgroundMovieCreate(whichArray, whichItem)
{
    // check the Video URL
    let videoUrl = whichArray[whichItem].theUrl;

    if (!videoUrl)
    {
        console.error("Invalid video URL");
        return;
    }

    if (ge('theVideo'))
    {
        ge('theVideo').remove();
    }

    // Create the video element
    let videoElement = ce('video');
    videoElement.id = 'theVideo';
    videoElement.setAttribute('height', '100%');
    videoElement.setAttribute('loop', true);
    videoElement.setAttribute('autoplay', true);

    //videoElement.setAttribute('muted', true);
    videoElement.muted = true;
    videoElement.setAttribute('id', 'theVideo');

    //-//

    let sourceElement = ce('source');
    sourceElement.setAttribute('src', videoUrl);
    sourceElement.setAttribute('type', 'video/mp4');
    videoElement.append(sourceElement);
    ba(videoElement);

    // load video 
    // videoElement.load();
}

/*
function backgroundMovieCreate(whichArray, whichItem)
{
    
    // if the background already exists remove it
    if (document.getElementsByClassName("theBackground2"))
    {
        eraseDivs("theBackground2");
        eraseDivs("backgroundMoviesStyle");
    }
    

    // new div element for background
    let mainDiv = ce("div");
    mainDiv.className = "theBackground2";
    mainDiv.id = "theBackgroundMovieHere";
    mainDiv.style.zIndex = 0;
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    // the video
    let videoElement = ce('video');
    videoElement.height = "100%";
    videoElement.loop = true;
    videoElement.id = 'theVideo';
    // videoElement.className = "theBackground2";
    videoElement.autoplay = true;
    videoElement.muted = true;
    mainDiv.append(videoElement);

    //-//

    // source element for the video
    let sourceElement = ce('source');
    sourceElement.src = whichArray[whichItem].theUrl;
    sourceElement.type = "video/mp4";
    videoElement.append(sourceElement);
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

