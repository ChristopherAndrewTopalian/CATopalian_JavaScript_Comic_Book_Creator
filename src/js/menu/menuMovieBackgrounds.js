// menuMovieBackgrounds.js

function menuMovieBackgrounds(whichArray, whichId, menuName, whichSound, theX, theY)
{
    whichArray = eval(whichArray);

    let theDiv = ce("div");
    theDiv.style.position = "fixed";
    theDiv.style.left = theX;
    theDiv.style.top = theY;
    theDiv.style.width = 300 + "px";
    theDiv.style.color = "rgb(100, 100, 100)";
    theDiv.style.zIndex = 1000;
    ba(theDiv);

    //-//

    let theDetails = ce("details");
    theDiv.append(theDetails);

    //-//

    let theSummary = ce("summary");
    theSummary.onclick = function()
    {
        playSound("sfx_crystal_bell_001", 1.0);
    };
    theSummary.textContent = menuName;
    theDetails.append(theSummary);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theDiv = ce("div");

        // get the last part of the file path, meaning the name.extension
        //theButton.textContent = whichArray[x].substring(whichArray[x].lastIndexOf('/') + 1);

        let theVariable = menu

        theDiv.innerHTML += '<button onclick = "'+theTest+'(\''+theIdToMove+'\')" class = "ourButton"> Timer '+theIdToMove+' </button>';

        theDiv.onclick = function()
        {
            ge(whichId).src = "texture\\gif\\" + whichArray[x];
        };

        theDiv.className = "ourButton";

        theDetails.append(theDiv);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

