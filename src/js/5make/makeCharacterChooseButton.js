// makeCharacterChooseButton.js

function makeCharacterChooseButton(whichX, whichY, whichId)
{
    let characterFiles = [];
    let counter = 0;
    let rezPositionLeft = 200;
    let rezPositionTop = 20;

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
    //mainDiv.style.overflowY = 'scroll';
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

            character.src = URL.createObjectURL(characterFiles[0]);

            /*
            // random
            character.src = URL.createObjectURL(
                characterFiles[Math.floor(Math.random() * characterFiles.length)]
            );
            */

            character.style.position = 'absolute';
            character.style.left = rezPositionLeft + 'px';
            character.style.top = rezPositionTop + 'px';
            character.style.zIndex = 1000;
            character.style.height = characterHeight + 'px';

            ba(character);
            makeElementDraggable(character);

            menuOptions(character.id);
        }
    };
    mainDiv.append(characterInput);

    //-//

    let openCharacterButton = ce('button');
    openCharacterButton.textContent = 'Load Character';
    openCharacterButton.style.lineHeight = '12px';
    openCharacterButton.onclick = function()
    {
        characterInput.click();
    };
    mainDiv.append(openCharacterButton);

    //-//

    let backButton = ce('button');
    backButton.textContent = '<=';
    backButton.onclick = function()
    {
        if (counter > 0)
        {
            counter -= 1;
            //characterFiles[counter];

            ge('character0').src = URL.createObjectURL(characterFiles[counter]);
        }
    };
    mainDiv.append(backButton);

    //-//

    let forwardButton = ce('button');
    forwardButton.textContent = '=>';
    forwardButton.onclick = function()
    {
        if (counter < characterFiles.length)
        {
            counter += 1;
            //characterFiles[counter];

            ge('character0').src = URL.createObjectURL(characterFiles[counter]);
        }
    };
    mainDiv.append(forwardButton);

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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

