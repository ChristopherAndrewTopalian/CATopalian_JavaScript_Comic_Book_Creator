// menuAnimationsArrayOfObjectsHere.js

// DETAILS VERSION HERE
//menuAnimationsArrayOfObjectsHere("animationsArrayOfObjects", "animation");
function menuAnimationsArrayOfObjectsHere(whichArray, whichCategory)
{
    if (ge("menuLeftId"))
    {
        eraseDivs('menuLeftMain');
    }

    whichArray = eval(whichArray);

    let mainDiv = ce("div");
    mainDiv.className = "menuLeftMain";
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 250 + "px";
    mainDiv.style.top = 0 + "px";
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
    theSummary.innerHTML = "";
    theDetails.append(theSummary);

    //-//

    let subDiv = ce("div");
    subDiv.className = "menuLeftSub";
    subDiv.style.float = "left";
    subDiv.style.overflowY = "scroll";
    subDiv.style.width = 750 + "px";
    subDiv.style.height = 200 + "px";
    subDiv.style.padding = 20 + "px";

    //-//

    let counterButtons = 0;

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'animation')
        {
            //eval turns it from 'nameOfHandle' to nameOfHandle without quotes

            counterButtons = counterButtons + 1;

            subDiv.innerHTML +=  '<button onclick = "clearAnimation(eval(\''+whichArray[x].timerName+'\'), \''+whichArray[x].name+'\');" class = "ourButton")> Clear </button>';

            subDiv.innerHTML += '<button onclick = "'+whichArray[x].name+'(\''+idToMove+'\')" class = "ourButton tags" gloss = \''+whichArray[x].description+'\' id ='+whichArray[x].name+'> '+whichArray[x].name+' '+whichArray[x].descriptiveName+'  '+idToMove+' </button>';
        }

        subDiv.innerHTML += "<br>";

        theDetails.append(subDiv);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

