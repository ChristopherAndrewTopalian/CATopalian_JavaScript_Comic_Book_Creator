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
    mainDiv.title = 'makeSelectorGalleryImages()';
    mainDiv.className = "gridContainerStyle";
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 20 + "px";
    mainDiv.style.top = 30 + "px";
    mainDiv.style.width = 800 + "px";
    mainDiv.style.height = 600 + "px";
    mainDiv.style.overflowY = "scroll";
    mainDiv.style.zIndex = "2000000";
    ba(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
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
        mainDiv.append(thePerson);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

