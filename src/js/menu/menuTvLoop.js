// menuTvLoop.js

function menuTvLoop(whichArray, whichId, menuName, whichSound, theX, theY)
{
    let theMenuId = "menuGifId";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 325 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.width = 200 + "px";
    mainDiv.id = "menuBackgroundId";
    mainDiv.style.zIndex = 10;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.height = 100 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.id = theMenuId;
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(theMenuId).remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = theMenuId + "()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "TV OPTION GIFS";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let loopButton = ce("button");
    loopButton.textContent = "Tv Loop";
    loopButton.className = "ourButton";
    loopButton.onclick = function()
    {
        textureTimerRepeat(gifsLand, 'prop_tv_screen_dark', 5000);
    };
    mainDiv.append(loopButton);

    //-//

    let clearButton = ce("button");
    clearButton.textContent = "Stop Gifs";
    clearButton.className = "ourButton";
    clearButton.onclick = function()
    {
        clearInterval(textureTimerRepeatTimer);
    };
    mainDiv.append(clearButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

