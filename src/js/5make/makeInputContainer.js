// makeInputContainer.js

function makeInputContainer(whichFlag)
{
    if (ge('inputMain'))
    {
        ge('inputMain').remove();
    }

    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 0 + 'px';
    mainDiv.style.bottom = 70 + 'px';
    mainDiv.id = 'inputMain';
    mainDiv.style.zIndex = 10000;
    mainDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    mainDiv.style.width = 150 + 'px';
    ba(mainDiv);

    //-//

    // close button
    mainDiv.append(closeButton('inputMain'));

    /*
    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.style.width = 25 + "px";
    theCloseX.style.height = 25 + "px";
    theCloseX.onclick = function()
    {
        ge("inputMain").remove();
    };
    mainDiv.append(theCloseX);
    */

    //-//

    let inputContainer = ce('div');
    inputContainer.id = 'inputContainer';
    inputContainer.style.overflowY = 'scroll';
    inputContainer.style.padding = 10 + 'px';
    inputContainer.style.margin = 10 + 'px';
    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'column';
    inputContainer.title = 'inputContainer';
    inputContainer.style.gap = 5 + 'px';
    mainDiv.append(inputContainer);

    //-//

    if (whichFlag == 'true')
    {
        makeCharacterChooseButton(0, 30, 'characterChooser');

        // bg chooser on the left
        makeBgChooserButton(0, 200, 'bgChooser');

        makeCharacterGalleryChooser(0, 200, 'characterGallery');
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

