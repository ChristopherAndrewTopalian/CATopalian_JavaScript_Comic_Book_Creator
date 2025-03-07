// zIndexDown.js

function zIndexDown(whichId)
{
    // get current layer
    let current = ge(whichId).style.zIndex;

    current = parseInt(current);

    // add one to current layer
    current -= 1;

    // set the new value
    ge(whichId).style.zIndex = current;

    ge("layerTextBox").value = current;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

