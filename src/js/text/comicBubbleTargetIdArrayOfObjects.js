// comicBubbleTargetIdArrayOfObjects.js

//comicBubbleTargetIdArrayOfObjects("ayan1", greetings);
function comicBubbleTargetIdArrayOfObjects(whichId, whichArray, whichIndex)
{
    if (document.getElementsByClassName("comicBubble"))
    {
        eraseByClass('comicBubble');
    }

    let whichWords = 0;

    // or choose to place comic above the idToMove element
    // whichId = idToMove;

    let playerTalkingLocationX = ge(whichId).getBoundingClientRect().x;

    let playerTalkingLocationY = ge(whichId).getBoundingClientRect().y;  // style.top

    let theX = playerTalkingLocationX - 45;
    let theY = playerTalkingLocationY - 20;

    //-//

    let theBubble = ce("div");
    theBubble.id = "theBubble";
    theBubble.style.position = "absolute";
    theBubble.style.left = theX;  // offSetX + "px";
    theBubble.style.top = theY;  // offSetY + "px";
    theBubble.className = "comicBubble";
    theBubble.onclick = function()
    {
        eraseByClass("comicBubble");
    };
    theBubble.style.zIndex = 30000;
    theBubble.textContent = whichArray[whichIndex].words;
    ba(theBubble);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

