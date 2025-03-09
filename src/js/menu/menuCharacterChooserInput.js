// menuCharacterChooserInput.js

// getFileName input box, bottom left of screen
function menuCharacterChooserInput()
{
    let theDiv = ce("div");
    theDiv.style.position = "fixed";
    theDiv.style.left = -82 + "px";
    theDiv.style.bottom = 30 + "px";
    theDiv.style.zIndex = 10000;
    theDiv.style.opacity = 0.5;
    ba(theDiv);

    //-//

    let theInputButton = ce("input");
    theInputButton.id = "theInput";
    theInputButton.onchange = function()
    {
        let theValue = ge("theInput").value;

        let theConvertedFileNameOutput = theValue.substring(12);

        let character = ce("img");

        let fields = theConvertedFileNameOutput.split(/[.]/);

        cl(fields);

        character.src = "src/media/texture/dragDrop" + "\/" + fields[0] + "." + fields.slice(-1)[0];

        character.id = theConvertedFileNameOutput;

        character.style.zIndex = 100;
        character.style.position = "absolute";
        character.style.left = 400 + "px";
        character.style.top = 400 + "px";
        character.style.width = 150 + "px";
        character.className = "characterStyle";
        character.oncontextmenu = function()
        {
            idToMove = character.id;

            menuOptions(idToMove);

            menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");

            // set the size value of the text area to the current value width of the object
            ge("sizeTextarea").value = Math.round(ge(idToMove).getBoundingClientRect().width);

            // set the positionX value of the text area to the current value width of the object
            ge("positionXTextarea").value = Math.round(ge(idToMove).getBoundingClientRect().left);

            // set value of positionX slider to current pos of object
            ge("positionSliderX").value = Math.round(ge(idToMove).getBoundingClientRect().left);

            //-//

            // set positionY value of text area to current value width of object
            ge("positionYTextarea").value = Math.round(ge(idToMove).getBoundingClientRect().top);

            // set value of positionY slider to current position of object
            ge("positionSliderY").value = Math.round(ge(idToMove).getBoundingClientRect().top);
        }
        character.ondragend = function()
        {
           dragEnd(idToMove);

           // set positionX value of text area to current value width of object
           ge("positionXTextarea").value = Math.round(ge(idToMove).getBoundingClientRect().left);

           // set value of positionX slider to current position of object
           ge("positionSliderX").value = ge(idToMove).getBoundingClientRect().left;

           // set positionY value of text area to current value height of object
           ge("positionYTextarea").value = Math.round(ge(idToMove).getBoundingClientRect().top);

           // set value of the positionX slider to current pos of object
           ge("positionSliderY").value = ge(idToMove).getBoundingClientRect().top;
        }
        ba(character);
    };

    theInputButton.type = "file";
    theInputButton.style.color = "rgb(100, 100, 100)";
    theDiv.append(theInputButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

