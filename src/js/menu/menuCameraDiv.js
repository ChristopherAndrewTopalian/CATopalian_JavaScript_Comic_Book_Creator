// menuCameraDiv.js

// NON DETAILS VERSION OF MENU
function menuCameraDiv()
{
    // if menu exists, remove it
    if (ge("menuCameraDivId"))
    {
        ge("menuCameraDivId").remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 300 + "px";
    mainDiv.style.top = 40 + "px";
    mainDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    mainDiv.className = "scrolling";
    mainDiv.id = "menuCameraDivId";
    mainDiv.style.zIndex = 10;
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge("menuCameraDivId").remove();
    } ;
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "menuSettings()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Camera Type";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let buttonFollow = ce("button");
    buttonFollow.textContent = "Follow";
    buttonFollow.onclick = function()
    {
        cameraFlag = "follow";
    };
    buttonFollow.className = "ourButton";
    mainDiv.append(buttonFollow);

    //-//

    let buttonStay = ce("button");
    buttonStay.textContent = "Stay";
    buttonStay.onclick = function()
    {
        cameraFlag = "stay";
    };

    buttonStay.className = "ourButton";
    mainDiv.append(buttonStay);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

