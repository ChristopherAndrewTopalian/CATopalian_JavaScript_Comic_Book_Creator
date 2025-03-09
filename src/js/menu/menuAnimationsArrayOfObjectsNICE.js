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
    mainDiv.style.left = 300 + "px";
    mainDiv.style.top = 40 + "px";
    mainDiv.style.width = 730 + "px";
    mainDiv.id = theMenuId;
    mainDiv.style.zIndex = 10;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.height = 100 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.className = "scrolling";
    mainDiv.id = theMenuId;
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
            // eval turns it from 'nameOfHandle' to nameOfHandle without quotes

            counterButtons = counterButtons + 1;

            subDiv.innerHTML +=  '<button onclick = "clearAnimation(eval(\''+whichArray[x].timerName+'\'), \''+whichArray[x].name+'\');" class = "ourButton")> Clear </button>';

            subDiv.innerHTML += '<button onclick = "'+whichArray[x].name+'(\''+idToMove+'\')" class = "ourButton tags" gloss = \''+whichArray[x].description+'\' id ='+whichArray[x].name+'> '+whichArray[x].name+' '+whichArray[x].descriptiveName+'  '+idToMove+' </button>';
        }

        subDiv.innerHTML += "<br>";

        mainDiv.append(subDiv);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

