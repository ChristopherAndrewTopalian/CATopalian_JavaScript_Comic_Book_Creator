// menuMenus.js

/*
function menuMenus()
{
    if (ge("menuMenusId"))
    {
        ge("menuMenusId").remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 0 + "px";
    mainDiv.style.top = 22 + "px";
    mainDiv.style.zIndex = 1000;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.id = "menuMenusId";
    ba(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "_";
    theCloseX.className = "ourButton";
    theCloseX.style.position = "absolute";
    theCloseX.style.left = 0 + "px";
    theCloseX.style.top = -22 + "px";
    theCloseX.onclick = function()
    {
        playSound("sfx_warp_001", 1.0);

        // minimize height of the window to show only _ and □
        ge("menuMenusSubDivId").style.height = 0 + "px";
    };
    mainDiv.append(theCloseX);

    //-//

    let theMaximize = ce("button");
    theMaximize.textContent = "□";
    theMaximize.className = "ourButton";
    theMaximize.style.position = "absolute";
    theMaximize.style.left = 30 + "px";
    theMaximize.style.top = -22 + "px";
    theMaximize.onclick = function()
    {
        playSound("sfx_warp_001", 1.0);

        ge("menuMenusSubDivId").style.height = 200 + "px";
    };
    mainDiv.append(theMaximize);

    //-//

    let subDiv = ce("div");
    subDiv.style.float = "left";
    subDiv.style.overflowY = "auto";
    subDiv.style.resize = "both";
    subDiv.style.height = 200 + "px";
    subDiv.id = "menuMenusSubDivId";
    subDiv.style.minWidth = "290px";
    subDiv.style.marginLeft = "auto";
    subDiv.style.marginRight = "auto";
    subDiv.className = "scrolling";
    mainDiv.append(subDiv);

    //-//

    for (let x = 0; x < theFunctions.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = theFunctions[x].description;
        theButton.style.display = "flex";
        theButton.style.flexDirection = "row";
        theButton.className = "ourButton";
        theButton.title = theFunctions[x].fullName;
        theButton.onmouseover = function()
        {
            hoverSound();
        };

        //if using only function names
        //theButton.onclick = function() { e v a l(""+theFunctions[x]+"" + "()" + ";"); cl(""+theFunctions[x]+"" +"()"); };

        theButton.onclick = function()
        {
            clickSound();

            // replaced with safer way
            e v a l(""+theFunctions[x].name+"" + ";");

            cl(""+theFunctions[x].name+"");
        };

        // ""+theFunctions[x]+""+"()";};

        // the buttons create menus
        subDiv.append(theButton);

        ge("menuMenusSubDivId").style.height = 0 + "px";
    }
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

