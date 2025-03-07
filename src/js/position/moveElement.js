// moveElement.js

function moveElement(whichId)
{
    let offsetWidth = ge(whichId).getBoundingClientRect().width;

    let offsetHeight = ge(whichId).getBoundingClientRect().height;

    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let theElement = ge(whichId);
    theElement.style.left = mouseX - offsetWidth / 2 + "px";
    theElement.style.top = mouseY - offsetHeight / 2 + "px";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

