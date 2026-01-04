// menuBackground.js

let house_001 = [
    'src/media/texture/apartment_001/001.webp',
    'src/media/texture/apartment_002/001.webp'
];

function menuBackground(whichArray, whichId, whichSound)
{
    let menuId = "menuBackgroundId";

    // if the menu exists, remove it
    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.title = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 320 + "px";
    mainDiv.style.top = 35 + "px";
    mainDiv.style.width = 500 + "px";
    mainDiv.style.height = 100 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.scrollbarWidth = 'thin';
    mainDiv.style.float = "left";
    mainDiv.style.zIndex = 10;
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(menuId).remove();
    } ;
    mainDiv.append(theCloseX);

    //----//

    let titleDiv = ce("div");
    titleDiv.textContent = "Backgrounds";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //----//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "menuBackgroundId()";
    mainDiv.append(subDiv);

    //----//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce("button");

        // get the last part of the file path, meaning the name.extension
        theButton.textContent = whichArray[x].substring(whichArray[x].lastIndexOf('/') + 1);

        theButton.onclick = function()
        {
            eraseByClass("backgroundTiles");

            ge(whichId).src = whichArray[x];

            playSound(whichSound, 1.0);
        };

        theButton.className = "ourButton";

        subDiv.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

