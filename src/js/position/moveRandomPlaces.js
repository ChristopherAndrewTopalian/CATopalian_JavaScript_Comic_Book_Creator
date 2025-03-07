// moveRandomPlaces.js

function moveRandomPlacesX(whichAmount)
{
    cl(whichAmount);

    let theCharacters = document.getElementsByTagName("img");

    for (let x = 0; x < theCharacters.length; x++)
    {
        if (theCharacters[x].getAttribute('id') != "theBgId" && theCharacters[x].getAttribute('id') != "zoomIcon" && theCharacters[x].getAttribute('class') != "propStyle")
        {
            ge(theCharacters[x].getAttribute('id')).style.left = Math.floor(Math.random() * whichAmount) + "px";
        }
    }
}

function moveRandomPlacesY(whichAmount)
{
    let theCharacters = document.getElementsByTagName("img");

    for (let x = 0; x < theCharacters.length; x++)
    {
        if (theCharacters[x].getAttribute('id') != "theBgId" && theCharacters[x].getAttribute('id') != "zoomIcon" && theCharacters[x].getAttribute('class') != "propStyle")
        {
            ge(theCharacters[x].getAttribute('id')).style.top = Math.floor(Math.random() * whichAmount) + "px";
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

