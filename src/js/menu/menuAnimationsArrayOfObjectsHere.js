// menuAnimationsArrayOfObjectsHere.js

function menuAnimationsArrayOfObjectsHere(whichArray, whichCategory)
{
    if (ge("menuLeftId"))
    {
        eraseByClass('menuLeftMain');
    }

    let mainDiv = ce("div");
    mainDiv.className = "menuLeftMain";
    mainDiv.style.position = "fixed";
    mainDiv.style.left = "250px";
    mainDiv.style.top = "0px";
    mainDiv.style.zIndex = 30;
    mainDiv.id = "menuLeftId";
    mainDiv.style.color = "rgb(100, 100, 100)";
    mainDiv.title = "menuAnimationsArrayOfObjectsHere()";
    ba(mainDiv);

    //-//

    let theDetails = ce("details");
    mainDiv.append(theDetails);

    //-//

    let theSummary = ce("summary");
    theSummary.onclick = function()
    {
        playSound("sfx_crystal_bell_001", 1.0);
    };
    theSummary.textContent = "";
    theDetails.append(theSummary);

    //-//

    let subDiv = ce("div");
    subDiv.className = "menuLeftSub";
    subDiv.style.float = "left";
    subDiv.style.overflowY = "scroll";
    subDiv.style.width = "750px";
    subDiv.style.height = "200px";
    subDiv.style.padding = "20px";

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

        subDiv.append(ce('br'));
    }

    theDetails.append(subDiv);
}

//----//

//menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");

//-----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

