// moveCharactersInARow.js

function moveCharactersInARow()
{
    let theCharacters = document.getElementsByTagName("img");

    for (let x = 0; x < theCharacters.length; x++)
    {
        if (theCharacters[x].getAttribute('id') != "theBgId" && theCharacters[x].getAttribute('id') != "zoomIcon" && theCharacters[x].getAttribute('class') != "propStyle")
        {
            ge(theCharacters[x].getAttribute('id')).style.top = 400 + "px";
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

