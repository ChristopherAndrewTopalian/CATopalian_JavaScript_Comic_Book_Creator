// galleryMakerArray.js

let galleryCharactersArray = [
    'src/media/texture/model/maven/full/front.webp',
    'src/media/texture/model/maven/full/back.webp',
    'src/media/texture/model/maven/full/left.webp',
    'src/media/texture/model/maven/full/diagonal_right.webp'
];

function galleryMakerArray(whichArray, whichCategory)
{
    if (ge("characterGalleryId"))
    {
        ge("characterGalleryId").remove();
    }
    else
    {
        // sortByNameAndCategory(galleryCharactersArray, "up");
        galleryCharactersArray.sort();

        let mainDiv = ce("div");
        mainDiv.id = "characterGalleryId";
        mainDiv.className = "gridContainerStyle";
        mainDiv.style.position = "fixed";
        mainDiv.style.left = 20 + "px";
        mainDiv.style.top = 30 + "px";
        mainDiv.style.width = 800 + "px";
        mainDiv.style.height = 430 + "px";
        mainDiv.style.overflowY = "scroll";
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

        for (let x = 0; x < whichArray.length; x++)
        {
            let thePerson = ce("img");
            thePerson.className = "gridItemStyle";
            thePerson.src = whichArray[x];
            thePerson.style.width = '50px';
            thePerson.title = whichArray[x];

            idToMove = whichArray[x].id;

            thePerson.onclick = function()
            {
                let theCreatedPerson = ce("img");
                theCreatedPerson.style.position = "absolute";
                theCreatedPerson.style.left = 400 + "px";
                theCreatedPerson.style.top = 400 + "px";
                theCreatedPerson.style.width = 50 + "px";
                theCreatedPerson.style.zIndex = 5;
                theCreatedPerson.id = whichArray[x] + "_" + x;

                menuOptions(theCreatedPerson.id);

                theCreatedPerson.src = whichArray[x];
                theCreatedPerson.className = 'createdPersonclassName';

                idToMove = theCreatedPerson.id;

                theCreatedPerson.oncontextmenu = function()
                {
                    idToMove = theCreatedPerson.id;

                    menuOptions(theCreatedPerson.id);

                    dragElement(theCreatedPerson.id);

                    menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");
                };
                ba(theCreatedPerson);
            };
            mainDiv.append(thePerson);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

