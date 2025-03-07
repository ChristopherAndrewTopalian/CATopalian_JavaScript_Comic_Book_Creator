// menuGif.js

function menuGif(whichArray, whichId, menuName, whichSound, theX, theY)
{
    whichArray = eval(whichArray);

    let theMenuId = "menuGifId";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 370 + "px";
    mainDiv.style.top = 400 + "px";
    mainDiv.style.width = 500 + "px";
    mainDiv.id = "menuBackgroundId";
    mainDiv.style.zIndex = 10;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.height = 100 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.className = "scrolling";
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
    titleDiv.textContent = "Play";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce("button");

        // get the last part of the file path, meaning the name.extension
        theButton.textContent = whichArray[x].substring(whichArray[x].lastIndexOf('/') + 1);

        theButton.onclick = function()
        {
            ge(whichId).src = "texture\\gif\\" + whichArray[x];

            ge("tvMovies").style.visibility = "hidden";

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

