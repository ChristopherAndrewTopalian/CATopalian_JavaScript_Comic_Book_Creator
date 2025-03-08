// mousePos.js

function mousePos()
{
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let mouseObject = [mouseX, mouseY];

    let mousePos = "X " + mouseX + " Y " + mouseY;

    if (ge("mousePosInfoLeft"))
    {
        ge("mousePosInfoLeft").textContent = mousePos;

        return mouseObject;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

