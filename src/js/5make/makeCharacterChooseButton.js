// makeCharacterChooseButton.js

function makeCharacterChooseButton(whichX, whichY, whichId)
{
    let counter = 0;
    let rezPositionLeft = 200;
    let rezPositionTop = 300;

    let characterHeight = 300;
    let layer = 1000;

    if (ge(whichId))
    {
        ge(whichId).remove();
    }

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
    characterInput.style.display = 'none';

    characterInput.onchange = function(event)
    {
        characterFiles = event.target.files;

        if (characterFiles && characterFiles.length > 0)
        {
            // remove any existing character
            if (ge('character' + counter))
            {
                ge('character' + counter).remove();
            }

            // make character
            let character = ce('img');
            character.id = 'character' + counter;

            character.src = URL.createObjectURL(
                characterFiles[Math.floor(Math.random() * characterFiles.length)]
            );

            character.style.position = 'absolute';
            character.style.left = rezPositionLeft + 'px';
            character.style.top = rezPositionTop + 'px';
            character.style.zIndex = 1000;
            character.style.height = characterHeight + 'px';

            ba(character);
            makeElementDraggable(character);
        }
    };
    mainDiv.append(characterInput);

    //-//

    let openCharacterButton = ce('button');
    openCharacterButton.textContent = 'Load Character';

    openCharacterButton.onclick = function()
    {
        characterInput.click();
    };
    mainDiv.append(openCharacterButton);

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

