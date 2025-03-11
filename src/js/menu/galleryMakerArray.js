// galleryMakerArray.js

let galleryCharactersArray = [
    'src/media/texture/model/maven/full/front.webp',
    'src/media/texture/model/maven/full/back.webp',
    'src/media/texture/model/maven/full/left.webp',
    'src/media/texture/model/maven/full/diagonal_right.webp'
];

// or is we are using the aoo function
let galleryCharactersAOO = [
    {
        name: 'Maven',
        id: 'maven_front',
        texture: 'src/media/texture/model/maven/full/front.webp',
        sizeX: 100,
        category: 'maven'
    },

    {
        id: 'maven_back',
        texture: 'src/media/texture/model/maven/full/back.webp',
        sizeX: 100,
        category: 'maven'
    },

    {
        id: 'maven_left',
        texture: 'src/media/texture/model/maven/full/left.webp',
        sizeX: 100,
        category: 'maven'
    },

    {
        id: 'maven_left',
        texture: 'src/media/texture/model/maven/full/diagonal_right.webp',
        sizeX: 100,
        category: 'maven'
    },
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
        mainDiv.style.position = "fixed";
        mainDiv.style.left = 30 + "px";
        mainDiv.style.top = 30 + "px";
        mainDiv.style.width = 800 + "px";
        mainDiv.style.height = 350 + "px";
        mainDiv.style.zIndex = "10000";
        ba(mainDiv);

        //-//

        let subDiv = ce('div');
        subDiv.style.display = 'grid';
        subDiv.style.gridTemplateColumns = 'auto auto auto';
        subDiv.style.width = 800 + "px";
        subDiv.style.height = 350 + "px";
        subDiv.style.overflowY = "scroll";
        subDiv.style.backgroundColor = 'rgba(30, 30, 30, 0.9)';
        mainDiv.append(subDiv);

        //-//

        // close button
        //mainDiv.append(closeButton('characterGalleryId'));

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

            thePerson.style.cursor = 'pointer';

            idToMove = whichArray[x].id;

            thePerson.onmouseover = function()
            {
                hoverSound();
            };

            thePerson.onclick = function()
            {
                clickSound();

                let theCreatedPerson = ce("img");
                theCreatedPerson.style.position = "absolute";
                theCreatedPerson.style.left = 400 + "px";
                theCreatedPerson.style.top = 100 + "px";
                theCreatedPerson.style.width = 100 + "px";
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

                makeElementDraggable(theCreatedPerson);
            };
            subDiv.append(thePerson);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

