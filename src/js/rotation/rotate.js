// rotate.js

function rotateSlider(whichId, whichSlider, whichOutput)
{
    let theValue = ge(whichSlider).value;

    // output the value to the div
    ge(whichOutput).textContent = theValue;

    ge(whichId).style.rotate = theValue + "deg";

    ge("rotateTextarea").value = theValue;
}

function rotate(whichId, whichDegree)
{
    if (whichDegree == "0")
    {
        ge(whichId).style.rotate = "0deg";
    }
    if (whichDegree == "45")
    {
        ge(whichId).style.rotate = "45deg";
    }
    if (whichDegree == "90")
    {
        ge(whichId).style.rotate = "90deg";
    }
    if (whichDegree == "180")
    {
        ge(whichId).style.rotate = "180deg";
    }
    if (whichDegree == "270")
    {
        ge(whichId).style.rotate = "270deg";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

