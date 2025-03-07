// menuAnimations.js

//menuAnimations('animations');
function menuAnimations(whichArray, whichCategory)
{
    if (ge("menuLeftId"))
    {
        eraseDivs('menuLeftMain');
    }

    whichArray = eval(whichArray);

    let mainDiv = ce("div");
    mainDiv.className = "menuLeftMain";
    mainDiv.id = "menuLeftId";
    mainDiv.style.color = "rgb(100, 100, 100)";
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
    theSummary.textContent = ">";
    theDetails.append(theSummary);

    //-//

    let subDiv = ce("div");
    subDiv.className = "menuLeftSub"

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'standing')
        {
            let theTest = "timerStanding";

            subDiv.innerHTML += '<button onclick = "'+theTest+'(\''+theIdToMove+'\')" class = "ourButton"> The Timer '+theIdToMove+' </button>';
        }
        if (whichArray[x].category == 'sitting')
        {
            let theTest2 = "timerSitting";

            subDiv.innerHTML += '<button onclick = "'+theTest2+'(\''+theIdToMove+'\')" class = "ourButton"> Testing '+theIdToMove+' </button>';
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

