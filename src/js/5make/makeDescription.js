// makeDescription.js

function makeDescription(whichArray)
{
    let theId = 'sceneDescription';

    let mainDiv = ce("div");
    mainDiv.id = theId;
    mainDiv.style.position = "fixed";
    mainDiv.style.right = 15 + "px";
    mainDiv.style.bottom = 70 + "px";
    mainDiv.style.paddingLeft = 12 + "px";
    mainDiv.style.paddingRight = 12 + "px";
    mainDiv.style.paddingTop = 3 + "px";
    mainDiv.style.paddingBottom = 3 + "px";
    mainDiv.style.borderRadius = 8 + "px";
    mainDiv.style.zIndex = 900;
    setTimeout(function()
    {
        if (ge(theId))
        {
            ge(theId).remove();
        }
    }, 2000);

    mainDiv.style.backgroundColor = "black";
    mainDiv.className = "menuStyle";
    mainDiv.innerHTML = whichArray[0].sceneTitle.bold() + "<br>" + whichArray[0].scene + "<hr>" + whichArray[0].description;
    mainDiv.style.color = "rgb(255, 255, 255)";
    ba(mainDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

