// menuRightClickFlag.js

let theEvent;

// NON DETAILS VERSION OF MENU
function menuRightClickFlag(whichId)
{
    whichId = "menuRightClickFlag";

    // if the menu exists, remove it
    if (ge(whichId))
    {
        ge(whichId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "relative";
    mainDiv.style.left = 350 + "px";
    mainDiv.style.top = 400 + "px";
    mainDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    mainDiv.className = "scrolling";
    mainDiv.id = whichId;
    mainDiv.style.zIndex = 10;
    mainDiv.style.float = "left";
    mainDiv.style.overflowY = "auto";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.borderRadius = 5 + "px";
    mainDiv.style.height = 100 + "px";
    ba(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge(whichId).remove();
    } ;
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = whichId + "()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Right Click Menu On/Off";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let buttonRightClickOff = ce("button");
    buttonRightClickOff.textContent = "Off";
    buttonRightClickOff.onclick = function()
    {
        // preventRightClickFlag = false;

        theEvent = window.addEventListener("contextmenu", function(e)
        {
            e.preventDefault();
        });

        //theEvent = window.addEventListener("contextmenu", e => e.preventDefault());
    };
    buttonRightClickOff.className = "ourButton";
    mainDiv.append(buttonRightClickOff);

    //-//

    let buttonRightClickOn = ce("button");
    buttonRightClickOn.textContent = "On";
    buttonRightClickOn.onclick = function()
    {
        alert("Refresh Page to Enable Right Click Menu Again");

        //preventRightClickFlag = "true";

        //window.removeEventListener("contextmenu", theEvent);
    };
    buttonRightClickOn.className = "ourButton";
    mainDiv.append(buttonRightClickOn);

    //-//

    let theText = ce("div");
    theText.textContent = "Allows Right Click Menu or Not";
    theText.style.display = "block";
    //inline //block //none //inline-block
    mainDiv.append(theText);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

