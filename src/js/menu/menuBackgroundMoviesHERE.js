// menuBackgroundMoviesHERE.js

function menuBackgroundMoviesHERE(whichSize, whichArray, whichSound)
{
    let theMenuId = "menuBackgroundMoviesHEREId";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 0 + "px";
    mainDiv.style.top = 260 + "px";
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

    let titleDiv = ce("div");
    titleDiv.textContent = "Videos";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = theMenuId + "()";
    subDiv.style.display = "flex";
    subDiv.style.flexDirection = "column";
    mainDiv.append(subDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce("button");

        theButton.textContent = whichArray[x].name;

        theButton.onclick = function()
        {
            if (whichSize == "sized")
            {
                // whichArray, whichItem, theX, theY, sizeX
                backgroundMovieCreateSize(movies, x);
            }
            if (whichSize == "full")
            {
                backgroundMovieCreate(movies, x);
            }

            playSound(whichSound, 1.0);
         };
        theButton.className = "ourButton";
        theButton.style.textAlign = "left";
        subDiv.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

