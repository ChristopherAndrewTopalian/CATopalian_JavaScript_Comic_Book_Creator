// menuSettings.js

function menuSettings()
{
    // if the menu exists, remove it
    if (ge("menuSettingsId"))
    {
        ge("menuSettingsId").remove();
    }

    // make a main div
    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.right = 5 + "px";
    mainDiv.style.top = 0 + "px";
    mainDiv.id = "menuSettingsId";
    mainDiv.style.zIndex = 10;
    ba(mainDiv);

    //-//

    let theDetails = ce("details");
    theDetails.style.float = "left";
    theDetails.style.overflowY = "auto";
    theDetails.style.height = 100 + "px";
    theDetails.style.color = "rgb(70, 70, 70)";
    theDetails.title = "menuSettings()";
    mainDiv.append(theDetails);

    //-//

    let theSelect = ce("summary");
    theSelect.textContent = "Camera";
    theDetails.append(theSelect);

    //-//

    let titleDiv = ce("div");
    titleDiv.textContent = "Type";
    titleDiv.style.color = "rgb(255, 255, 255)";
    theDetails.append(titleDiv);

    //-//

    let buttonFollow = ce("button");
    buttonFollow.textContent = "Follow";
    buttonFollow.onclick = function()
    {
        cameraFlag = "follow";
    };
    buttonFollow.className = "ourButton";
    titleDiv.append(buttonFollow);

    //-//

    let buttonStay = ce("button");
    buttonStay.textContent = "Stay";
    buttonStay.onclick = function()
    {
        cameraFlag = "stay";
    };
    buttonStay.className = "ourButton";
    titleDiv.append(buttonStay);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

