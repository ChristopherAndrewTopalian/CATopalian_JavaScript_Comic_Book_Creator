// mousePositionShow.js

function hideMouseInfo()
{
    if (ge("mousePositionShowId"))
    {
        ge("mousePositionShowId").remove();
    }
}

function mousePositionShow(whichId)
{
    if (ge("mousePositionShowId"))
    {
        ge("mousePositionShowId").remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 80 + "px";
    mainDiv.style.top = 0 + "px";
    mainDiv.id = "mousePositionShowId";
    mainDiv.title = "mousePositionShow()";
    mainDiv.style.zIndex = 1000;
    // remove menu when right clicked
    mainDiv.oncontextmenu = function()
    {
        ge("mousePositionShowId").remove();
    };
    ba(mainDiv);

    //-//

    let thePanel = ce("div");
    thePanel.style.position = "fixed";
    thePanel.id = "theInfoId";
    thePanel.style.height = 10 + "px";
    thePanel.style.backgroundColor = "rgb(0, 0, 0)";
    thePanel.style.borderStyle = "solid";
    thePanel.style.borderWidth = 1 + "px";
    thePanel.style.padding = 5 + "px";
    thePanel.style.color = "rgb(70, 70, 70)";
    thePanel.style.fontFamily = "arial";
    thePanel.style.fontSize = 13 + "px";
    thePanel.style.opacity = "0.9";

    // thePanel.innerHTML += 'Id to Edit <div>\''+idToMove+'\'</div>';

    thePanel.innerHTML = '<div id = "mousePosInfoLeft"></div>';

    // thePanel.innerHTML += '<hr>';

    mainDiv.append(thePanel);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

