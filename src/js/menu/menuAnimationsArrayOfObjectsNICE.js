// menuAnimationsArrayOfObjectsNICE.js

function menuAnimationsArrayOfObjectsNICE(whichArray, whichCategory)
{
    let theMenuId = "menuAnimationsArrayOfObjectsNICEId";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = "300px";
    mainDiv.style.top = "40px";
    mainDiv.style.width = "730px";
    mainDiv.id = theMenuId;
    mainDiv.style.zIndex = 10;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.height = "100px";
    mainDiv.style.padding = "10px";
    mainDiv.style.borderRadius = "5px";
    mainDiv.className = "scrolling";
    ba(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(theMenuId).remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = theMenuId + "()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Play";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let counterButtons = 0;

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'animation')
        {
            counterButtons++;

            let clearButton = ce("button");
            clearButton.className = "ourButton";
            clearButton.onclick = function() {
                clearAnimation(window[whichArray[x].timerName], whichArray[x].name);
            };
            clearButton.textContent = "Clear";
            subDiv.append(clearButton);

            //-//

            let animationButton = ce("button");
            animationButton.className = "ourButton tags";
            animationButton.setAttribute("gloss", whichArray[x].description);
            animationButton.id = whichArray[x].name;
            animationButton.textContent = whichArray[x].name + ' ' + whichArray[x].descriptiveName + ' ' + idToMove;
            animationButton.onclick = function()
            {
                window[whichArray[x].name](idToMove);
            };
            subDiv.append(animationButton);
        }

        let lineBreak = ce("br");
        subDiv.append(lineBreak);
    }

    mainDiv.append(subDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

