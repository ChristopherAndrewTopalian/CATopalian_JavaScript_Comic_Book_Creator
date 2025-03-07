// makeSelectorGallery.js

function makeSelectorGallery(whichArray, whichCategory)
{
    // note: this selector gallery is currently using the scene data file, instead of collecting what is on the screen.
    // thus, any characters or props you add to the screen will not be shown in the selection gallery

    whichArray = eval(whichArray);

    if (ge("characterGalleryId"))
    {
        ge("characterGalleryId").remove();
    }
    else
    {
        //sortByNameAndCategory(everything, "up");

        let mainDiv = ce("div");
        mainDiv.style.position = "fixed";
        mainDiv.style.left = 20 + "px";
        mainDiv.style.top = 30 + "px";
        mainDiv.style.width = 800 + "px";
        mainDiv.style.height = 600 + "px";
        mainDiv.style.overflowY = "scroll";
        mainDiv.className = "gridContainerStyle";
        mainDiv.id = "characterGalleryId";
        mainDiv.style.zIndex = "2000000";
        ba(mainDiv);

        //-//

        let theCloseX = ce("button");
        theCloseX.textContent = "X";
        theCloseX.className = "ourButton";
        theCloseX.style.width = 25 + "px";
        theCloseX.style.height = 25 + "px";
        theCloseX.onclick = function()
        {
            ge("characterGalleryId").remove();
        };
        mainDiv.append(theCloseX);

        //-//

        for (let x = 0; x < whichArray.length; x++)
        {
            if (ge)
            {
                let thePerson = ce("img");
                thePerson.className = "gridItemStyle";
                thePerson.src = whichArray[x].texture;
                thePerson.style.width = whichArray[x].sizeX;

                thePerson.title = whichArray[x].name + "\n" + whichArray[x].texture;

                thePerson.style.position = "relative";

                thePerson.style.left = whichArray[x].posX;

                thePerson.style.top = whichArray[x].posY;

                idToMove = whichArray[x].theId;

                //-//

                thePerson.onclick = function()
                {
                    menuOptions(whichArray[x].name);

                    idToMove = whichArray[x].name;

                    setMenuOptionsValues(whichArray, x);
                };
                mainDiv.append(thePerson);
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

