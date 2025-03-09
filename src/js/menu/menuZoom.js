// menuZoom.js

let zoomLevel = 1.0;

function menuZoom()
{
    let theMenuId = "menuZoomId";

    // if the menu exists, remove it
    if (ge(theMenuId))
    {
        ge(theMenuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.right = 0 + "px";
    mainDiv.style.top = 30 + "px";
    mainDiv.style.width = 100 + "px";
    mainDiv.id = "menuBackgroundId";
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

    makeElementDraggable(mainDiv);

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
    titleDiv.textContent = "Zoom";
    titleDiv.style.color = "rgb(255, 255, 255)";
    subDiv.append(titleDiv);

    //-//

    let theButtonZoomIn = ce("button");
    theButtonZoomIn.onclick = function()
    {
        // zoom in - each click zooms in
        zoom(zoomLevel);
        zoomLevel += 0.10;
    }
    playSound("sfx_warp_001", 1.0);
    theButtonZoomIn.textContent = "+";
    theButtonZoomIn.className = "ourButton";
    subDiv.append(theButtonZoomIn);

    //-//

    let theButtonZoomOut = ce("button");
    theButtonZoomOut.onclick = function()
    {
        // zoom in - each click zooms in
        zoom(zoomLevel);
        zoomLevel -= 0.10;
    }

    playSound("sfx_warp_001", 1.0);

    theButtonZoomOut.textContent = "-";
    theButtonZoomOut.className = "ourButton";
    subDiv.append(theButtonZoomOut);

    //-//

    let theButton = ce("button");
    theButton.onclick = function()
    {
        zoom(1.35);
    }

    playSound("sfx_warp_001", 1.0);

    theButton.textContent = "1.0";
    theButton.className = "ourButton";
    subDiv.append(theButton);

    //-//

    let theButton1 = ce("button");
    theButton1.onclick = function()
    {
        zoom(1.5);
    };

    playSound("sfx_warp_001", 1.0);

    theButton1.textContent = "1.5";
    theButton1.className = "ourButton";
    subDiv.append(theButton1);

    //-//

    let theButton2 = ce("button");
    theButton2.onclick = function()
    {
        zoom(2.0);
    };

    playSound("sfx_warp_001", 1.0);

    theButton2.textContent = "2.0";
    theButton2.className = "ourButton";
    subDiv.append(theButton2);

    //-//

    let theButton3 = ce("button");
    theButton3.onclick = function()
    {
        zoom(2.5);
    };

    playSound("sfx_warp_001", 1.0);

    theButton3.textContent = "2.5";
    theButton3.className = "ourButton";
    subDiv.append(theButton3);

    //-//

    let theButton4 = ce("button");
    theButton4.onclick = function()
    {
        zoom(3.0);
    };

    playSound("sfx_warp_001", 1.0);

    theButton4.textContent = "3.0";
    theButton4.className = "ourButton";
    subDiv.append(theButton4);

    //-//

    let theButton5 = ce("button");
    theButton5.onclick = function()
    {
        zoom(3.5);
    };

    playSound("sfx_warp_001", 1.0);

    theButton5.textContent = "3.5";
    theButton5.className = "ourButton";
    subDiv.append(theButton5);

    //-//

    let theButton6 = ce("button");
    theButton6.onclick = function()
    {
        zoom(4.0);
    }

    playSound("sfx_warp_001", 1.0);

    theButton6.textContent = "4.0";
    theButton6.className = "ourButton";
    subDiv.append(theButton6);

    //-//

    let theButton7 = ce("button");
    theButton7.onclick = function()
    {
        zoom(4.5);
    }

    playSound("sfx_warp_001", 1.0);

    theButton7.textContent = "4.5";
    theButton7.className = "ourButton";
    subDiv.append(theButton7);

    //-//

    let theButton8 = ce("button");
    theButton8.onclick = function()
    {
        zoom(5.0);
    };

    playSound("sfx_warp_001", 1.0);

    theButton8.textContent = "5.0";
    theButton8.className = "ourButton";
    subDiv.append(theButton8);

    //-//

    let theButton9 = ce("button");
    theButton9.onclick = function()
    {
        zoom(5.5);
    };

    playSound("sfx_warp_001", 1.0);

    theButton9.textContent = "5.5";
    theButton9.className = "ourButton";
    subDiv.append(theButton9);

    //-//

    let theButton10 = ce("button");
    theButton10.onclick = function()
    {
        zoom(6.0);
    };

    playSound("sfx_warp_001", 1.0);

    theButton10.textContent = "6.0";
    theButton10.className = "ourButton";
    subDiv.append(theButton10);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

