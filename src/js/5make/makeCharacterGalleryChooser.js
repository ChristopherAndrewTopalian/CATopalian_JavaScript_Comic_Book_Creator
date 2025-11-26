// makeCharacterGalleryChooser.js

function makeCharacterGalleryChooser(whichX, whichY, whichId)
{
    let counter = 0;
    let rezPositionLeft = 200;
    let rezPositionTop = 300;

    let characterHeight = 300;
    let layer = 3000;

    //-//

    let mainDiv = ce('div');
    mainDiv.id = whichId;
    mainDiv.style.zIndex = layer;
    mainDiv.title = whichId;
    mainDiv.style.width = 100 + 'px';
    mainDiv.style.overflowY = 'scroll';
    ge('inputContainer').append(mainDiv);

    //-//

    let characterInput = ce('input');
    characterInput.type = 'file';
    characterInput.multiple = true;
    characterInput.id = whichId;
    characterInput.onchange = function (event)
    {
        // clear the existing gallery and buttons
        let existingGallery = ge('galleryContainer');
    
        if (existingGallery)
        {
            existingGallery.remove();
        }

        // remove any existing buttons
        let existingMinimizeButton = ge('minimizeButton');
        if (existingMinimizeButton)
        {
            existingMinimizeButton.remove();
        }

        let existingMaximizeButton = ge('maximizeButton');
        if (existingMaximizeButton)
        {
            existingMaximizeButton.remove();
        }

        // get the newly selected files
        let characterFiles = event.target.files;

        if (characterFiles && characterFiles.length > 0)
        {
            let minimizeButton = ce('button');
            minimizeButton.textContent = '_';
            minimizeButton.id = 'minimizeButton';  // Give it a unique ID
            minimizeButton.onclick = function()
            {
                ge('galleryContainer').style.display = 'none';
            };
            mainDiv.append(minimizeButton);

            //-//

            let maximizeButton = ce('button');
            maximizeButton.textContent = 'O';
            maximizeButton.id = 'maximizeButton';  // give it a unique ID
            maximizeButton.onclick = function()
            {
                ge('galleryContainer').style.display = 'block';
            };
            mainDiv.append(maximizeButton);

            //-//

            let galleryContainer = ce('div');
            galleryContainer.id = 'galleryContainer';

            // center the gallery on the screen
            galleryContainer.style.position = 'fixed';
            galleryContainer.style.top = '50%';
            galleryContainer.style.left = '50%';
            galleryContainer.style.transform = 'translate(-50%, -50%)'; // center it
            galleryContainer.style.overflowY = 'scroll';
            galleryContainer.style.overflowX = 'scroll';
            galleryContainer.style.display = 'grid';
            galleryContainer.style.gridTemplateColumns = 'auto auto auto';
            galleryContainer.style.gap = '1px';

            galleryContainer.style.width = 500 + 'px';
            galleryContainer.style.height = 300 + 'px';
            galleryContainer.style.border = 'solid 1px rgb(255, 255, 255)';
            galleryContainer.style.zIndex = 40000;
            ba(galleryContainer);

            //-//

            // populate gallery with new files
            for (let x = 0; x < characterFiles.length; x++)
            {
                let character = ce('img');
                character.id = 'character' + counter;

                character.src = URL.createObjectURL(characterFiles[x]);

                character.onclick = function ()
                {
                    counter += 1;

                    clickSound2();

                    let theChoice = ce('img');
                    theChoice.src = character.src;
                    theChoice.id = characterFiles[x].name + counter;
                    theChoice.style.position = 'absolute';
                    theChoice.style.left = 500 + 'px';
                    theChoice.style.top = 100 + 'px';
                    theChoice.style.zIndex = 500000;
                    theChoice.style.width = 200 + 'px';

                    theChoice.oncontextmenu = function()
                    {
                        idToMove = theChoice.id;

                        //setMenuOptionsValuesOnRightClick(theChoice.id);

                        menuOptions(theChoice.id);
                    }
                    ba(theChoice);

                    makeElementDraggable(theChoice);
                };

                character.style.zIndex = 1000;
                character.style.height = characterHeight + 'px';

                galleryContainer.append(character);

                makeElementDraggable(character);
            }
            ba(galleryContainer);
        }
    };
    mainDiv.append(characterInput);

    //-//

    let randomButton = ce('button');
    randomButton.textContent = 'Random';
    randomButton.onclick = function()
    {
        // remove any existing character
        if (ge('character' + counter))
        {
            ge('character' + counter).remove();
        }

        // make character
        let character = ce('img');
        character.src = URL.createObjectURL(characterFiles[Math.floor(Math.random() * characterFiles.length)]);
        character.id = 'character' + counter;
        character.style.position = 'absolute';

        character.style.zIndex = layer;

        character.style.left = rezPositionLeft + 'px';
        character.style.top = rezPositionTop + 'px';
        character.style.height = characterHeight + 'px';
        ba(character);

        makeElementDraggable(character);
    };
    mainDiv.append(randomButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

