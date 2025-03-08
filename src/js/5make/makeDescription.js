// makeDescription.js

function makeDescription(whichArray)
{
    let theId = 'sceneDescription';

    let mainDiv = ce("div");
    mainDiv.id = theId;
    mainDiv.style.position = "fixed";
    mainDiv.style.right = "15px";
    mainDiv.style.bottom = "70px";
    mainDiv.style.paddingLeft = "12px";
    mainDiv.style.paddingRight = "12px";
    mainDiv.style.paddingTop = "3px";
    mainDiv.style.paddingBottom = "3px";
    mainDiv.style.borderRadius = "8px";
    mainDiv.style.zIndex = 900;
    mainDiv.style.backgroundColor = "black";
    mainDiv.className = "menuStyle";
    mainDiv.style.color = "rgb(255, 255, 255)";
    ba(mainDiv);

    //-//
 
    let theTitle = ce("div");
    theTitle.textContent = whichArray[0].sceneTitle;
    theTitle.style.fontWeight = 'bold';
    mainDiv.append(theTitle);

    //-//

    let scene = ce("div");
    scene.textContent = whichArray[0].scene;
    mainDiv.append(scene);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let description = ce("div");
    description.textContent = whichArray[0].description;
    mainDiv.append(description);

    //-//

    // remove mainDiv after 2 seconds
    setTimeout(function()
    {
        if (ge(mainDiv.id))
        {
            ge(mainDiv.id).remove();
        }
    }, 2000);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

