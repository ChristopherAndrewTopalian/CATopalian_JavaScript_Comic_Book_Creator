// menuAnimationsJustArray.js

//menuAnimationsJustArray('animationsAll');
function menuAnimationsJustArray(whichArray)
{
    if (ge("menuLeftId"))
    {
        eraseDivs('menuLeftMain');
    }

    whichArray = eval(whichArray);

    let mainDiv = ce("div");
    mainDiv.className = "menuLeftMain";
    mainDiv.style.zIndex = 20000;
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
    theSummary.textContent = "Animations";
    theDetails.append(theSummary);

    //-//

    let subDiv = ce("div");
    subDiv.className = "menuLeftSub"

    for (let x = 0; x < whichArray.length; x++)
    {
        subDiv.innerHTML += '<button onclick = "'+whichArray[x]+'(\''+idToMove+'\')" class = "ourButton"> '+whichArray[x]+'  '+idToMove+' </button>';

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

