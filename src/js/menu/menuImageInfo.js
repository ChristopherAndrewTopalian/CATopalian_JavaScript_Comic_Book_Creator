// menuImageInfo.js

// NON DETAILS VERSION OF MENU
function menuImageInfo()
{
    let menuId = 'menuImageDataDivId';

    // if the menu exists, remove it
    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.title = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 300 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    mainDiv.className = "scrolling";
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
        ge("menuImageDataDivId").remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "menuImageInfo()";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Image Info";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let buttonStay = ce("button");
    buttonStay.textContent = "Info";
    buttonStay.onclick = function()
    {
        if (!(ge("dataDiv")))
        {
            makeDataArea();
        }

        getImageInfo();
    };

    buttonStay.className = "ourButton";
    mainDiv.append(buttonStay);

    //-//

    let theText = ce("div");
    theText.textContent = "Set Camera here";
    theText.style.display = "block";
    // inline // block // none // inline-block
    mainDiv.append(theText);
}

function needed()
{
    makeDataArea();
    getImageInfo();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

