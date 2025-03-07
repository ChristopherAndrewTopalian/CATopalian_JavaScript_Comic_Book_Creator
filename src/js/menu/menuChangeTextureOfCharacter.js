// menuChangeTextureOfCharacter.js

function menuChangeTextureOfCharacter(whichId)
{
    whichId = idToMove;

    let menuId = "menuChangeTextureOfCharacterId";

    // if menu exists
    if (ge(menuId))
    {
        // remove the menu
        ge(menuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 300 + "px";
    mainDiv.style.top = 20 + "px";
    mainDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    mainDiv.className = "scrolling";
    mainDiv.id = menuId;
    mainDiv.style.zIndex = 10;
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.style.height = 100 + "px";
    ba(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(menuId).remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "menuChangeTextureOfCharacter()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Change Texture";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let backButton = ce("button");
    backButton.textContent = "Back";
    backButton.onclick = function()
    {
        backPageAny(whichId);
    };
    backButton.className = "ourButton";
    mainDiv.append(backButton);

    //-//

    let forwardButton = ce("button");
    forwardButton.textContent = "Forward";
    forwardButton.onclick = function()
    {
        forwardPageAny(whichId);
    };
    forwardButton.className = "ourButton";
    mainDiv.append(forwardButton);

    //-//

    let theText = ce("div");
    theText.textContent = "Change Texture";
    theText.style.display = "block";
    mainDiv.append(theText);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

