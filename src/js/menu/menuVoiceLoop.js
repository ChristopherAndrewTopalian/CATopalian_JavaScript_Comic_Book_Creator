// menuVoiceLoop.js

// NON DETAILS VERSION OF MENU
function menuVoiceLoop()
{
    // if the menu exists, remove it
    if (ge("menuVoiceLoopId"))
    {
        ge("menuVoiceLoopId").remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 350 + "px";
    //function(){ getPos(idToMove).x };
    //function(){ getPos(idToMove).y };
    mainDiv.style.top = 400 + "px";
    mainDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    mainDiv.className = "scrolling";
    mainDiv.id = "menuVoiceLoopId";
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
        ge("menuVoiceLoopId").remove();
    };
    mainDiv.append(theCloseX);

    //-//

    let subDiv = ce("div");
    subDiv.style.color = "rgb(70, 70, 70)";
    subDiv.title = "test";
    mainDiv.append(subDiv);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Voice Loop";
    titleDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.append(titleDiv);

    //-//

    let activateVoicesButton = ce("button");
    activateVoicesButton.textContent = "Activate";
    activateVoicesButton.onclick = function()
    {
        soundPlayVoices('voiceArray', 5000);
    };
    activateVoicesButton.className = "ourButton";
    mainDiv.append(activateVoicesButton);

    //-//

    let deactivateVoicesButton = ce("button");
    deactivateVoicesButton.textContent = "Deactivate";
    deactivateVoicesButton.onclick = function()
    {
        clearInterval(soundPlayVoicesTimer);
    };
    deactivateVoicesButton.className = "ourButton";
    mainDiv.append(deactivateVoicesButton);

    //-//

    let theText = ce("div");
    theText.textContent = "Voice Loop Options";
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

