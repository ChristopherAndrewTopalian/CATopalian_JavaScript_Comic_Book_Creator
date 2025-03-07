// closeButton.js

function closeButton(whichId)
{
    let closeButton = ce("button");
    closeButton.textContent = "X";
    closeButton.className = "ourButton";
    closeButton.onclick = function()
    {
        ge(whichId).remove();
    };

    return closeButton;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

