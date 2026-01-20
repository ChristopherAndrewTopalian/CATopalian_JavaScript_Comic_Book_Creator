// menuScenes.js

// makes a scene menu appear
function menuScenes(whichArray, whichId, menuName, whichSound, theX, theY)
{
    let theMenuId = "menuGifId";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 300 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.width = '200px';
    mainDiv.id = "menuBackgroundId";
    mainDiv.style.zIndex = 1000;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.padding = '4px';
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.style.overflowY = "scroll";
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

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = theMenuId + "()";
    mainDiv.append(subDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce("button");

        theButton.textContent = whichArray[x].name;

        theButton.onclick = function()
        {
            playSound(whichSound, 1.0);

            scene(whichArray[x].obj);

            sceneEvents(whichArray, x);

            // used for menuSelectorGallery
            currentScene = whichArray[x].obj;
        };

        theButton.className = "ourButton";
        subDiv.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

