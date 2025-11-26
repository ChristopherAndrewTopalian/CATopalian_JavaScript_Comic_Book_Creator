// galleryMaker.js

// combine arrays together into one array
let everything = galleryCharacters.concat(galleryHeads, galleryBody, galleryProps, galleryJets, galleryTanks, galleryArtillery, galleryDronesMilitary, galleryMilitaryMales, galleryDesks, galleryPeople, galleryTables, galleryComponents);

let countries = [
{
    name: "America",
},

{
    name: "China",
},

{
    name: "Russia"
}
];

function galleryMaker(whichArray, whichCategory)
{
    if (ge("characterGalleryId"))
    {
        ge("characterGalleryId").remove();
    }
    else
    {
        sortByNameAndCategory(everything, "up");

        let mainDiv = ce("div");
        mainDiv.id = "characterGalleryId";
        mainDiv.style.position = "fixed";
        mainDiv.style.left = 30 + "px";
        mainDiv.style.top = 30 + "px";
        mainDiv.style.width = 600 + "px";
        mainDiv.style.height = 300 + "px";
        //mainDiv.style.overflowY = "scroll";
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

        // close button
        // mainDiv.append(closeButton('characterGalleryId'));

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

        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].category == whichCategory)
            {
                let thePerson = ce("img");
                thePerson.className = "gridItemStyle";
                thePerson.src = whichArray[x].texture;
                thePerson.style.width = whichArray[x].sizeX;

                thePerson.title = whichArray[x].name + "\n" + whichArray[x].texture;

                thePerson.style.cursor = 'pointer';

                thePerson.style.position = "relative";

                thePerson.style.left = whichArray[x].posX;

                thePerson.style.top = whichArray[x].posY;

                idToMove = whichArray[x].theId;

                //-//

                thePerson.onmouseover = function()
                {
                    hoverSound();
                };

                thePerson.onclick = function()
                {
                    clickSound();

                    let theCreatedPerson = ce("img");

                    theCreatedPerson.style.position = "absolute";

                    theCreatedPerson.style.left = 300 + "px";
                    theCreatedPerson.style.top = 200 + "px";

                    theCreatedPerson.style.width = whichArray[x].sizeX + "px";

                    theCreatedPerson.style.zIndex = 5;

                    theCreatedPerson.id = whichArray[x].name + "_" + x;

                    menuOptions(theCreatedPerson.id);

                    theCreatedPerson.src = whichArray[x].texture;

                    theCreatedPerson.className = whichArray[x].className;

                    setMenuOptionsValues(whichArray, x);

                    idToMove = theCreatedPerson.id;

                    // when right clicked
                    theCreatedPerson.oncontextmenu = function()
                    {
                        idToMove = theCreatedPerson.id;

                        menuOptions(theCreatedPerson.id);

                        menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");

                        setMenuOptionsValuesOnRightClick(theCreatedPerson.id);

                        //setMenuOptionsValues(whichArray, x);
                    };
                    ba(theCreatedPerson);

                    makeElementDraggable(theCreatedPerson);
                };
                subDiv.append(thePerson);
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

