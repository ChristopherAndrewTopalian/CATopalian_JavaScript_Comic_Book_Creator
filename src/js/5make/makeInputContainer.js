// makeInputContainer.js

function makeInputContainer(whichFlag)
{
    if (ge('inputMain'))
    {
        ge('inputMain').remove();
    }

    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 10 + 'px';
    mainDiv.style.top = 20 + 'px';
    mainDiv.id = 'inputMain';
    mainDiv.style.zIndex = 10000;
    mainDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    mainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    mainDiv.style.width = 150 + 'px';
    //mainDiv.style.overflowY = 'scroll';
    ba(mainDiv);

    makeElementDraggable(mainDiv);

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
    //inputContainer.style.overflowY = 'scroll';
    inputContainer.style.paddingLeft = '4px';
    inputContainer.style.paddingRight = '4px';
    //inputContainer.style.margin = '0px 2px';
    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'column';
    inputContainer.title = 'inputContainer';
    inputContainer.style.gap = 2 + 'px';
    mainDiv.append(inputContainer);

    //-//

    if (whichFlag == 'true')
    {
        inputContainer.append(ce('hr'));

        makeCharacterChooseButton(0, 30, 'characterChooser');

        inputContainer.append(ce('hr'));

        // bg chooser on the left
        makeBgChooserButton(0, 200, 'bgChooser');

        inputContainer.append(ce('hr'));

        makeCharacterGalleryChooser(0, 200, 'characterGallery');

        inputContainer.append(ce('hr'));
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

