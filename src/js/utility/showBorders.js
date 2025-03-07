// showBorders.js

function showBorders()
{
    let theObjects = document.getElementsByTagName("img");

    for (let x = 0; x < theObjects.length; x++)
    {
        theObjects[x].style.borderStyle = "solid";
        theObjects[x].style.borderWidth = 2 + "px";
        theObjects[x].style.borderColor = "rgb(255, 255, 255)";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

