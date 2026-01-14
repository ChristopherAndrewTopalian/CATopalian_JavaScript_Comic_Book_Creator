// menuMoveRandomPlaces.js

function menuMoveRandomPlaces(whichId)
{
    let menuId = "menuMoveRandomPlaces";

    // if the menu exists, remove it
    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 350 + "px";
    mainDiv.style.top = 0 + "px";
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
    } ;
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "random";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Move Random Places";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let textareaRandomPlacesX = ce("textarea");
    textareaRandomPlacesX.id = "textareaRandomPlacesX";
    textareaRandomPlacesX.onkeyup = function()
    {
        let theAmount = ge("textareaRandomPlacesX").value;
    };

    mainDiv.append(textareaRandomPlacesX);

    //-//

    let buttonRandomPlacesX = ce("button");
    buttonRandomPlacesX.textContent = "X";
    buttonRandomPlacesX.onclick = function()
    {
        moveRandomPlacesX(ge("textareaRandomPlacesX").value);
    };
    buttonRandomPlacesX.className = "ourButton";
    mainDiv.append(buttonRandomPlacesX);

    //-//

    let buttonRandomPlacesY = ce("button");
    buttonRandomPlacesY.textContent = "Y";
    buttonRandomPlacesY.onclick = function()
    {
        moveRandomPlacesY(ge("textareaRandomPlacesX").value);
    };
    buttonRandomPlacesY.className = "ourButton";
    mainDiv.append(buttonRandomPlacesY);

    //-//

    let buttonInRow = ce("button");
    buttonInRow.textContent = "Row";
    buttonInRow.onclick = function()
    {
        moveCharactersInARow();
    };
    buttonInRow.className = "ourButton";
    mainDiv.append(buttonInRow);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

