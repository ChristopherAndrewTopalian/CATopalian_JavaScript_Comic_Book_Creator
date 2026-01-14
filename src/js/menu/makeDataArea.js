// makeDataArea.js

function makeDataArea()
{
    let mainDiv = ce("div");
    mainDiv.id = "dataDiv";
    mainDiv.title = 'makeDataArea()';
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 300 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.zIndex = 20;
    mainDiv.style.overflowY = "scroll";
    mainDiv.className = "mainDiv";
    mainDiv.oncontextmenu = function()
    {
        ge("dataDiv").remove();
    }
    ba(mainDiv);

    //-//

    let theTextArea = ce("textarea");
    theTextArea.style.height = 200 + "px";
    theTextArea.style.width = 400 + "px";
    theTextArea.style.color = "white";
    theTextArea.style.padding = 10 + "px";
    theTextArea.value = "Howdy";
    theTextArea.id = "data";
    theTextArea.style.backgroundColor = "black";
    theTextArea.style.borderStyle = "solid";
    theTextArea.style.borderWidth = 2 + "px";
    mainDiv.append(theTextArea);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

