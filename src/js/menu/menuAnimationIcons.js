// menuAnimationIcons.js

function menuAnimationIcons(whichId)
{
    whichId = "menuDragFlagId";

    // if the menu exists, remove it
    if (ge(whichId))
    {
        ge(whichId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 350 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.className = "scrolling";
    mainDiv.id = whichId;
    mainDiv.style.zIndex = 10;
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.style.height = 100 + "px";
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(whichId).remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = whichId + "()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "ANIMATION";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let leftRightButton = ce("button");
    leftRightButton.textContent = "Left/Right";
    leftRightButton.onclick = function()
    {
        let leftRightFlag = setInterval(function()
        {
            leftAndRightAnim(idToMove);
        }, 2000);
    };
    leftRightButton.className = "ourButton";
    mainDiv.append(leftRightButton);

    //-//

    let upDownButton = ce("button");
    upDownButton.textContent = "Up/Down";
    upDownButton.onclick = function()
    {
        let upDownFlag = setInterval(function()
        {
            upAndDownAnim(idToMove);
        }, 2000);
    };
    upDownButton.className = "ourButton";
    mainDiv.append(upDownButton);

    //-//

    let theText = ce("div");
    theText.textContent = "Animation Style";
    theText.style.display = "block";
    //inline //block //none //inline-block
    mainDiv.append(theText);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

