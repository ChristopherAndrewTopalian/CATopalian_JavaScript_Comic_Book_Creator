// menuDropDownScenes.js

let currentScene;

function menuDropDownScenes(whichArray, whichId, menuName, whichSound, theX, theY)
{
    let theSelect = ce("select");
    theSelect.id = "menuDropDownScenes";
    theSelect.style.position = "fixed";
    theSelect.style.right = theX + "px";
    theSelect.style.top = theY + "px";
    theSelect.style.zIndex = 1000000;
    theSelect.title = "menuDropDownScenes()";
    theSelect.className = "ourDropDown";
    theSelect.onmouseout = function()
    {
        ge("menuDropDownScenes").style.opacity = "0.0";
    };
    theSelect.onmouseover = function()
    {
        ge("menuDropDownScenes").style.opacity = "1.0";
    };
    ba(theSelect);

    //-//

    // default to first option if no match is found
    let defaultIndex = 0;

    // append options to dropdown
    for (let x = 0; x < whichArray.length; x++)
    {
        let theOption = ce("option");
        theOption.text = whichArray[x].name;
        theOption.className = "tags";
        theOption.onclick = function()
        {
            playSound(whichSound, 1.0);

            scene(whichArray[x].obj);

            sceneEvents(whichArray, x);

            currentScene = whichArray[x];
        };

        // check if this is desired default scene (scene_tv_room_001)
        if (whichArray[x].name === 'scene_tv_room_001')
        {
            // store index of default scene
            defaultIndex = x;
            // set currentScene to default
            currentScene = whichArray[x];
        }
        theSelect.append(theOption);
    }

    // set default selected option to be 'scene_tv_room_001'
    theSelect.selectedIndex = defaultIndex;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

