// makeSelectorGalleryImages.js

function makeSelectorGalleryImages()
{
    let theImages = [];

    let whichArray = document.getElementsByTagName("img");

    for (let x = 0; x < whichArray.length; x++)
    {
        theImages.push(whichArray[x].getAttribute("src"));
    }

    // sortByNameAndCategory(everything, "up");

    let mainDiv = ce("div");
    mainDiv.id = "characterGalleryId";
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 30 + "px";
    mainDiv.style.top = 30 + "px";
    mainDiv.style.width = 700 + "px";
    mainDiv.style.height = 300 + "px";
    mainDiv.style.zIndex = "10000";
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.style.display = 'grid';
    subDiv.style.gridTemplateColumns = 'auto auto auto';
    subDiv.style.width = 700 + "px";
    subDiv.style.height = 300 + "px";
    subDiv.style.overflowY = "scroll";
    subDiv.style.backgroundColor = 'rgba(30, 30, 30, 0.9)';
    mainDiv.append(subDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.style.position = 'absolute';
    theCloseX.style.left = 0 + 'px';
    theCloseX.style.top = -2 + 'px';
    theCloseX.style.width = 25 + "px";
    theCloseX.style.height = 25 + "px";
    theCloseX.onmouseover = function()
    {
        hoverSound();
    };
    theCloseX.onclick = function()
    {
        ge("characterGalleryId").remove();
    };
    mainDiv.append(theCloseX);

    //-//

    for (let x = 0; x < theImages.length; x++)
    {
        let thePerson = ce("img");
        thePerson.className = "gridItemStyle";
        thePerson.src = theImages[x];
        thePerson.style.width = 100 + "px";
        thePerson.title = whichArray[x].id;
        thePerson.style.position = "relative";
        thePerson.style.left = 100 + "px";
        thePerson.style.top = 100 + "px";

        idToMove = theImages[x];

        //-//

        thePerson.onclick = function()
        {
            menuOptions(whichArray[x].id);

            idToMove = theImages[x];

            // closeMenu
            ge("characterGalleryId").remove();
        };
        subDiv.append(thePerson);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

