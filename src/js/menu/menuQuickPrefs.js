// menuQuickPrefs.js

function menuQuickPrefs()
{
    if (ge("quickPrefs"))
    {
        ge("quickPrefs").remove();
    }

    let bottomDiv = ce("div");
    bottomDiv.className = 'interface';
    bottomDiv.style.position = "fixed";
    bottomDiv.style.bottom = 0 + "px";
    bottomDiv.style.right = 0 + "px";
    bottomDiv.id = "quickPrefs";
    bottomDiv.style.zIndex = 10000;
    bottomDiv.oncontextmenu = function()
    {
        ge("quickPrefs").remove();
    };
    ba(bottomDiv);

    //-//

    let camStayButton = ce("button");
    camStayButton.textContent = "CamS";
    camStayButton.style.backgroundColor = "rgb(0, 0, 0)";
    camStayButton.style.color = "rgb(255, 255, 255)";
    camStayButton.onmouseover = function()
    {
        hoverSound();
    };
    camStayButton.onclick = function()
    {
        clickSound();

        cl("camera stay button");
        cameraFlag = "stay";
    };
    camStayButton.setAttribute("gloss","Camera Stay");
    camStayButton.className = "ourButton tags2";
    camStayButton.id = "camStayButton";
    bottomDiv.append(camStayButton);

    //-//

    let camFollowButton = ce("button");
    camFollowButton.textContent = "CamF";
    camFollowButton.style.backgroundColor = "rgb(0, 0, 0)";
    camFollowButton.style.color = "rgb(255, 255, 255)";
    camFollowButton.setAttribute("gloss","Camera Follow");
    camFollowButton.className = "ourButton tags2";
    camFollowButton.onmouseover = function()
    {
        hoverSound();
    };
    camFollowButton.onclick = function()
    {
        clickSound();

        cl("camera follow button");
        cameraFlag = "follow";
    };
    camFollowButton.id = "camStayButton";
    bottomDiv.append(camFollowButton);

    //-//

    let textureBox = ce("button");
    textureBox.textContent = "Tex";
    textureBox.onmouseover = function()
    {
        hoverSound();
    };
    textureBox.onclick = function()
    {
        clickSound();

        makeTextureInfoBox();
    };
    textureBox.setAttribute("gloss","Texture Box");
    textureBox.className = "ourButton tags2";
    bottomDiv.append(textureBox);

    //-//

    let rightClickOffButton = ce('button');
    rightClickOffButton.className = 'ourButton tags2';
    rightClickOffButton.textContent = 'RC Off';
    rightClickOffButton.title = 'Right Click Off';
    rightClickOffButton.setAttribute("gloss","Right Click OFF");
    rightClickOffButton.onmouseover = function()
    {
        hoverSound();
    };
    rightClickOffButton.onclick = function()
    {
        clickSound();

        rightClickOff();
    };
    bottomDiv.append(rightClickOffButton);

    //-//

    let rightClickOnButton = ce('button');
    rightClickOnButton.className = 'ourButton tags2';
    rightClickOnButton.textContent = 'RC On';
    rightClickOnButton.title = 'Right Click On';
    rightClickOnButton.setAttribute("gloss","Right Click ON");
    rightClickOnButton.onmouseover = function()
    {
        hoverSound();
    };
    rightClickOnButton.onclick = function()
    {
        clickSound();
        rightClickOn();
    };
    bottomDiv.append(rightClickOnButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

