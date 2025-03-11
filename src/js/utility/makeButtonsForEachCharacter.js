// makeButtonsForEachCharacter.js

function solid(whichId)
{
    ge(whichId).style.opacity = 1.0;
}

function seeThrough(whichId)
{
    ge(whichId).style.opacity = 0.4;
}

function makeButtonsForEachCharacter()
{
    let theCharacters2 = document.getElementsByTagName("img");

    let mainDiv = ce("div");
    mainDiv.id = "buttonsForEachCharacterId";
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 30 + "px";
    mainDiv.style.top = 100 + "px";
    mainDiv.style.width = 500 + "px";
    mainDiv.style.height = 300 + "px";
    mainDiv.style.overflowY = "scroll";
    mainDiv.style.backgroundColor = 'rgba(30, 30, 30, 0.9)';
    mainDiv.style.zIndex = 20000;
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "X";
    theCloseX.className = "ourButton";
    theCloseX.onclick = function()
    {
        ge("buttonsForEachCharacterId").remove();
    };
    mainDiv.append(theCloseX);

    //-//

    for (let x = 0; x < theCharacters2.length; x++)
    {
        //let fields = theCharacters[x].src.slice(/[ourFolder]/);

        let theButton = ce("button");
        theButton.className = "ourButton";
        theButton.textContent = theCharacters2[x].getAttribute('id');
        theButton.onmouseover = function()
        {
            hoverSound();
        };
        theButton.onclick = function()
        {
            clickSound();

            //alert(theCharacters[x].getAttribute( 'id' )); //.src

            idToMove = theCharacters2[x].getAttribute('id');

            menuOptions(theCharacters2[x].getAttribute('id'));

            menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");
        };
        mainDiv.append(theButton);
    }
}

// let elements = document.getElementsByName( 'yourname' );
// let id = elements[0].getAttribute( 'id' );

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

