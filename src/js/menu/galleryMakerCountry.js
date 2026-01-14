// galleryMakerCountry.js

function galleryMakerCountry(whichArray, whichCategory, whichCountry)
{
    if (ge("characterGalleryId"))
    {
        ge("characterGalleryId").remove();
    }
    else
    {
        sortByNameAndCategory(everything, "up");

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

        // close button
        mainDiv.append(closeButton('characterGalleryId'));

        //-//

        /*
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
        */

        //-//

        let theDropDownMenu = ce("select");
        theDropDownMenu.className = "gridItemStyle";
        theDropDownMenu.style.height = 40 + "px";
        mainDiv.append(theDropDownMenu);

        //-//

        for (let j = 0; j < countries.length; j++)
        {
            let theOptions = ce("option");
            theOptions.text = countries[j].name;

            theOptions.onclick = function()
            {
                ge("characterGalleryId").remove();

                galleryMaker(everything, 'jet')

                alert(theOptions.text);
        };
        theDropDownMenu.append(theOptions);
        }

        //-//

        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].category == whichCategory && whichArray[x].country == whichCountry)
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
                    let theCreatedPerson = ce("img");

                    theCreatedPerson.style.position = "absolute";

                    theCreatedPerson.style.left = 400 + "px";
                    theCreatedPerson.style.top = 400 + "px";

                    theCreatedPerson.style.width = whichArray[x].sizeX + "px";

                    theCreatedPerson.style.zIndex = 5;

                    theCreatedPerson.id = whichArray[x].name + "_" + x;

                    menuOptions(theCreatedPerson.id);

                    theCreatedPerson.src = whichArray[x].texture;

                    theCreatedPerson.className = whichArray[x].className;

                    setMenuOptionsValues(whichArray, x);

                    idToMove = theCreatedPerson.id;

                    theCreatedPerson.oncontextmenu = function()
                    {
                        idToMove = theCreatedPerson.id;

                        menuOptions(theCreatedPerson.id);

                        dragElement(theCreatedPerson.id);

                        menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");

                        setMenuOptionsValues(whichArray, x);
                    };
                    ba(theCreatedPerson);
                };
                mainDiv.append(thePerson);
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

